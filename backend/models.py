from sqlalchemy import ForeignKey, Column, Integer,Text, String, DateTime
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    full_name = Column(String, nullable=False)

    email = Column(String, unique=True, nullable=False, index=True)

    password_hash = Column(String, nullable=True)

    google_id = Column(String, nullable=True, unique=True)

    profile_picture = Column(String, nullable=True)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now()
    )
    resumes = relationship(
    "Resume",
    back_populates="owner"
)





class Resume(Base):

    __tablename__ = "resumes"


    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False
    )


    title = Column(
        String,
        default="My Resume"
    )


    data = Column(
        Text,
        nullable=False
    )


    created_at = Column(
        DateTime,
        server_default=func.now()
    )


    updated_at = Column(
        DateTime,
        onupdate=func.now()
    )
    owner = relationship(
    "User",
    back_populates="resumes"
)    