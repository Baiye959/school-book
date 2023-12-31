from pydantic import BaseModel

class User(BaseModel):
    username: str
    password: str
    role: int
    token: str