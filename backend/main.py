import os
import json
from database import Base, engine
from sqlalchemy.orm import Session
from auth import (
    hash_password,
    verify_password,
    create_access_token
)
from models import Resume
from schemas import ResumeCreate
from database import get_db
from models import User
import models

from dependencies import get_current_user
from schemas import (
    RegisterRequest,
    LoginRequest,
    UserResponse,
    TokenResponse
)
from schemas import GoogleLoginRequest
from auth import verify_google_token
from auth import hash_password
from fastapi import FastAPI, HTTPException,Depends
from fastapi.middleware.cors import CORSMiddleware
from huggingface_hub import InferenceClient
from dotenv import load_dotenv


load_dotenv()


app = FastAPI()
Base.metadata.create_all(bind=engine)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


client = InferenceClient(
    token=os.getenv("HF_TOKEN")
)


@app.get("/")
def home():
    return {
        "message": "AI Resume Backend Running"
    }

@app.get("/me", response_model=UserResponse)
def get_profile(
    current_user: User = Depends(get_current_user)
):

    return current_user


@app.post("/improve-summary")
async def improve_summary(data: dict):

    try:

        name = data.get("name", "")
        title = data.get("title", "")
        current_summary = data.get("summary", "")

        skills = data.get("skills", [])
        experience = data.get("experience", [])
        projects = data.get("projects", [])

        if isinstance(skills, list):
            skills_text = ", ".join(str(skill) for skill in skills)
        else:
            skills_text = str(skills)

        experience_text = json.dumps(
            experience,
            indent=2,
            ensure_ascii=False
        )

        projects_text = json.dumps(
            projects,
            indent=2,
            ensure_ascii=False
        )

        prompt = f"""
Create a professional ATS-friendly resume summary.

Rules:
- Write more then 5 sentences.
- Keep it between 100 and 300 words.
- Use third person.
- Never use "I", "my", or "me".
- Mention the candidate's strongest technical skills.
- Mention relevant experience or projects if available.
- Make it professional, concise, and impactful.
- Do not invent information.
- Return ONLY the summary without headings, markdown, bullet points, or explanations.

Candidate Information

Name:
{name}

Job Title:
{title}

Current Summary:
{current_summary}

Skills:
{skills_text}

Experience:
{experience_text}

Projects:
{projects_text}
"""

        response = client.chat.completions.create(
            model="Qwen/Qwen2.5-7B-Instruct",
            messages=[
                {
                    "role": "system",
                    "content": (
                        "You are an expert ATS resume writer. "
                        "Write strong, professional resume summaries that are "
                        "clear, concise, keyword-rich, and tailored to the "
                        "candidate's information. Never invent facts."
                    )
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            max_tokens=200,
            temperature=0.6,
        )

        improved_text = (
            response.choices[0]
            .message.content
            .strip()
            .replace('"', "")
        )

        return {
            "summary": improved_text
        }

    except Exception as e:

        print("AI ERROR:", str(e))

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
    

@app.post("/register", response_model=UserResponse)
def register(
        data: RegisterRequest,
        db: Session = Depends(get_db)
):

        existing_user = db.query(User).filter(
            User.email == data.email
    ).first()

        if existing_user:
            raise HTTPException(
                status_code=400,
                detail="Email already registered"
        )

        new_user = User(
            full_name=data.full_name,
            email=data.email,
            password_hash=hash_password(data.password)
    )

        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        return new_user



@app.post("/login", response_model=TokenResponse)
def login(
    data: LoginRequest,
    db: Session = Depends(get_db)
):

    user = db.query(User).filter(
        User.email == data.email
    ).first()


    if not user:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )


    if not verify_password(
        data.password,
        user.password_hash
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )


    token = create_access_token({
        "sub": str(user.id),
        "email": user.email
    })


    return {
        "access_token": token,
        "token_type": "bearer"
    }
@app.post("/google-login", response_model=TokenResponse)
def google_login(
    data: GoogleLoginRequest,
    db: Session = Depends(get_db)
):
    try:
        google_user = verify_google_token(data.token)
    except Exception as e:
        
        print("GOOGLE ERROR:", e)
        raise HTTPException(
        status_code=401,
        detail=str(e)
    )

    



    email = google_user["email"]


    user = db.query(User).filter(
        User.email == email
    ).first()



    if not user:

        user = User(

            full_name=google_user.get(
                "name"
            ),

            email=email,

            google_id=google_user.get(
                "sub"
            ),

            profile_picture=google_user.get(
                "picture"
            )

        )

        db.add(user)

        db.commit()

        db.refresh(user)



    token = create_access_token({

        "sub": str(user.id),

        "email": user.email

    })



    return {

        "access_token": token,

        "token_type": "bearer"

    }


@app.post("/resumes")
def create_resume(
    resume: ResumeCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):


    new_resume = Resume(

        user_id=current_user.id,

        title=resume.title,

        data=resume.data

    )


    db.add(new_resume)

    db.commit()

    db.refresh(new_resume)


    return new_resume