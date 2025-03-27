from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from app.api import deps
from app.schemas.student import Student, StudentCreate, StudentUpdate
from app.services import student_service
from app.core.security import get_current_user
from app.models.user import User

router = APIRouter()

@router.get("/", response_model=List[Student])
async def get_students(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: User = Depends(get_current_user),
    school_id: Optional[int] = None,
):
    """
    Retrieve students with pagination.
    """
    try:
        students = student_service.get_students(
            db,
            skip=skip,
            limit=limit,
            school_id=school_id,
            user_role=current_user.role,
            user_school_id=current_user.school_id
        )
        return students
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )

@router.get("/{student_id}", response_model=Student)
async def get_student(
    student_id: int,
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(get_current_user),
):
    """
    Get a specific student by ID.
    """
    try:
        student = student_service.get_student(
            db,
            student_id=student_id,
            user_role=current_user.role,
            user_school_id=current_user.school_id
        )
        if not student:
            raise HTTPException(status_code=404, detail="Student not found")
        return student
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )

@router.get("/search/", response_model=List[Student])
async def search_students(
    query: str = Query(..., min_length=2),
    db: Session = Depends(deps.get_db),
    current_user: User = Depends(get_current_user),
    school_id: Optional[int] = None,
):
    """
    Search students by name, ID, or other criteria.
    """
    try:
        students = student_service.search_students(
            db,
            query=query,
            school_id=school_id,
            user_role=current_user.role,
            user_school_id=current_user.school_id
        )
        return students
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        ) 