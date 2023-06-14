from pydantic import BaseModel

class Book(BaseModel):
    # id: int
    name: str
    sex: str
    work: str
    tel: str
    id_type: str
    id_num: str
    inviter: str
    booktime: int
    reason: str
    photo: str
    state: int