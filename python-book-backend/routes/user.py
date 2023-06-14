from fastapi import APIRouter

from models.user import User
from config.db import conn
from schemas.user import userEntity, usersEntity

from bson import ObjectId
user = APIRouter()

@user.get('/user/')
async def find_all_users():
    return usersEntity(conn.local.user.find())

@user.get('/user/{id}')
async def find_one_user(id):
    return userEntity(conn.local.user.find_one_and_delete({"_id":ObjectId(id)}))

@user.post('/user/')
async def create_user(user: User):
    conn.local.user.insert_one(dict(user))
    return usersEntity(conn.local.user.find())

@user.put('/user/{id}')
async def update_user(id, user: User):
    conn.local.user.find_one_and_update({"_id":ObjectId(id)}, {
        "$set": dict(user)
    })
    return userEntity(conn.local.user.find_one({"_id":ObjectId(id)}))

@user.delete('/user/{id}')
async def delete_user(id):
    return userEntity(conn.local.user.find_one_and_delete({"_id":ObjectId(id)}))