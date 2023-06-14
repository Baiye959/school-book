from fastapi import APIRouter

from models.book import Book
from config.db import conn
from schemas.book import bookEntity, booksEntity

from bson import ObjectId
book = APIRouter()

# @book.get('/book/')
# async def find_all_books():
#     return booksEntity(conn.local.book.find())

# @book.get('/book/{id}')
# async def find_one_book(id):
#     return bookEntity(conn.local.book.find_one({"_id":ObjectId(id)}))

@book.get('/book/{state}')
async def find_books_by_state(state):
    return booksEntity(conn.local.book.find({"state":int(state)}))

# @book.get('/book/')
# async def find_books():
#     return booksEntity(conn.local.book.find())

@book.put('/book/{id}/{state}')
async def update_book_state(id, state:int):
    conn.local.book.find_one_and_update({"_id":ObjectId(id)}, {
        "$set": {"state":int(state)}
    })
    return bookEntity(conn.local.book.find_one({"_id":ObjectId(id)}))

@book.post('/book/')
async def create_book(book: Book):
    conn.local.book.insert_one(dict(book))
    return booksEntity(conn.local.book.find())

# @book.put('/book/{id}')
# async def update_book(id, book: Book):
#     conn.local.book.find_one_and_update({"_id":ObjectId(id)}, {
#         "$set": dict(book)
#     })
#     return bookEntity(conn.local.book.find_one({"_id":ObjectId(id)}))

# @book.delete('/book/{id}')
# async def delete_book(id):
#     return bookEntity(conn.local.book.find_one_and_delete({"_id":ObjectId(id)}))