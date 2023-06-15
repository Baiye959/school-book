from fastapi import FastAPI
from routes.user import user
from routes.book import book
from fastapi.middleware.cors import CORSMiddleware
# from routes.sms_router import router as sms_router

app = FastAPI()
app.include_router(user)
app.include_router(book)
# app.include_router(sms_router)

origins = [
    "http://localhost",
    "http://localhost:8080", 
    "http://localhost:5173", 
    "http://localhost:5000", 
    "http://localhost:27017", 
    "http://localhost:80", 
    ]

app.add_middleware(
    CORSMiddleware,
    # allow_origins=origins,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)