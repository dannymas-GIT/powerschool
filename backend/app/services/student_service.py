from typing import List, Optional
from sqlalchemy.orm import Session
import httpx
from app.core.config import settings
from app.models.user import UserRole
from app.schemas.student import Student

class PowerSchoolAPIError(Exception):
    pass

async def get_powerschool_token() -> str:
    """
    Get an access token from PowerSchool API.
    """
    async with httpx.AsyncClient() as client:
        response = await client.post(
            f"{settings.POWERSCHOOL_URL}/oauth/access_token",
            data={
                "grant_type": "client_credentials",
                "client_id": settings.POWERSCHOOL_CLIENT_ID,
                "client_secret": settings.POWERSCHOOL_CLIENT_SECRET,
            }
        )
        if response.status_code != 200:
            raise PowerSchoolAPIError("Failed to get access token")
        return response.json()["access_token"]

async def get_students(
    db: Session,
    skip: int = 0,
    limit: int = 100,
    school_id: Optional[int] = None,
    user_role: UserRole = None,
    user_school_id: Optional[int] = None,
) -> List[Student]:
    """
    Retrieve students from PowerSchool API with role-based access control.
    """
    # Check permissions
    if user_role == UserRole.STUDENT or user_role == UserRole.PARENT:
        raise PermissionError("Insufficient permissions to view student list")

    # Get access token
    token = await get_powerschool_token()

    # Build query parameters
    params = {
        "skip": skip,
        "limit": limit,
    }
    if school_id:
        params["school_id"] = school_id
    elif user_role == UserRole.SCHOOL_ADMIN and user_school_id:
        params["school_id"] = user_school_id

    # Make API request
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"{settings.POWERSCHOOL_URL}/ws/v1/district/student",
            headers={"Authorization": f"Bearer {token}"},
            params=params
        )
        if response.status_code != 200:
            raise PowerSchoolAPIError("Failed to fetch students")
        
        data = response.json()
        return [Student(**student) for student in data["students"]]

async def get_student(
    db: Session,
    student_id: int,
    user_role: UserRole = None,
    user_school_id: Optional[int] = None,
) -> Optional[Student]:
    """
    Get a specific student from PowerSchool API with role-based access control.
    """
    # Get access token
    token = await get_powerschool_token()

    # Make API request
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"{settings.POWERSCHOOL_URL}/ws/v1/district/student/{student_id}",
            headers={"Authorization": f"Bearer {token}"}
        )
        if response.status_code == 404:
            return None
        if response.status_code != 200:
            raise PowerSchoolAPIError("Failed to fetch student")

        data = response.json()
        student = Student(**data["student"])

        # Check permissions
        if user_role == UserRole.STUDENT and student.id != user_school_id:
            raise PermissionError("Can only view own student data")
        if user_role == UserRole.PARENT and student.id not in get_parent_student_ids(user_school_id):
            raise PermissionError("Can only view children's data")
        if user_role == UserRole.SCHOOL_ADMIN and student.school_id != user_school_id:
            raise PermissionError("Can only view students from own school")

        return student

async def search_students(
    db: Session,
    query: str,
    school_id: Optional[int] = None,
    user_role: UserRole = None,
    user_school_id: Optional[int] = None,
) -> List[Student]:
    """
    Search students in PowerSchool API with role-based access control.
    """
    # Check permissions
    if user_role == UserRole.STUDENT or user_role == UserRole.PARENT:
        raise PermissionError("Insufficient permissions to search students")

    # Get access token
    token = await get_powerschool_token()

    # Build query parameters
    params = {
        "q": query,
    }
    if school_id:
        params["school_id"] = school_id
    elif user_role == UserRole.SCHOOL_ADMIN and user_school_id:
        params["school_id"] = user_school_id

    # Make API request
    async with httpx.AsyncClient() as client:
        response = await client.get(
            f"{settings.POWERSCHOOL_URL}/ws/v1/district/student/query",
            headers={"Authorization": f"Bearer {token}"},
            params=params
        )
        if response.status_code != 200:
            raise PowerSchoolAPIError("Failed to search students")
        
        data = response.json()
        return [Student(**student) for student in data["students"]]

def get_parent_student_ids(parent_id: int) -> List[int]:
    """
    Get list of student IDs associated with a parent.
    This would typically query a parent-student relationship table.
    """
    # TODO: Implement parent-student relationship lookup
    return [] 