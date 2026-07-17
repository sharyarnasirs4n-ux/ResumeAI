from pydantic import BaseModel, EmailStr



class RegisterRequest(BaseModel):
    full_name: str
    email: EmailStr
    password: str


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    id: int
    full_name: str
    email: EmailStr
    profile_picture: str | None = None

    class Config:
        from_attributes = True

class TokenResponse(BaseModel):
    access_token: str
    token_type: str        

class GoogleLoginRequest(BaseModel):
    token: str 





class ResumeCreate(BaseModel):

    title:str

    data:str



class ResumeResponse(BaseModel):

    id:int

    title:str

    data:str

    class Config:

        from_attributes=True       