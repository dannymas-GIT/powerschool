from sqlalchemy import Boolean, Column, Integer, String, Enum
from sqlalchemy.orm import relationship
from app.db.base_class import Base
import enum

class UserRole(str, enum.Enum):
    DISTRICT_ADMIN = "district_admin"
    SCHOOL_ADMIN = "school_admin"
    TEACHER = "teacher"
    DATA_ANALYST = "data_analyst"
    STUDENT = "student"
    PARENT = "parent"

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    full_name = Column(String)
    role = Column(Enum(UserRole), nullable=False)
    is_active = Column(Boolean, default=True)
    school_id = Column(Integer, nullable=True)
    
    # Relationships
    permissions = relationship("UserPermission", back_populates="user")
    audit_logs = relationship("AuditLog", back_populates="user") 