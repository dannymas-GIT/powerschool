from typing import Optional
from pydantic import BaseModel, Field
from datetime import date

class StudentBase(BaseModel):
    first_name: str
    last_name: str
    student_number: str
    school_id: int
    grade_level: Optional[int] = None
    enrollment_status: str
    birth_date: Optional[date] = None
    gender: Optional[str] = None
    ethnicity: Optional[str] = None
    email: Optional[str] = None
    phone: Optional[str] = None
    address: Optional[str] = None
    city: Optional[str] = None
    state: Optional[str] = None
    zip_code: Optional[str] = None

class StudentCreate(StudentBase):
    pass

class StudentUpdate(StudentBase):
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    student_number: Optional[str] = None
    school_id: Optional[int] = None
    enrollment_status: Optional[str] = None

class Student(StudentBase):
    id: int
    created_at: date
    updated_at: date

    class Config:
        from_attributes = True 