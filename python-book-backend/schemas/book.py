def bookEntity(item) -> dict:
    return {
    "id": str(item["_id"]),
    "name": item["name"],
    "sex": item["sex"],
    "work": item["work"],
    "tel": item["tel"],
    "id_type": item["id_type"],
    "id_num": item["id_num"],
    "inviter": item["inviter"],
    "booktime": item["booktime"],
    "reason": item["reason"],
    "photo": item["photo"],
    "state": item["state"]
    }

def booksEntity(entity) -> list:
    return [bookEntity(item) for item in entity]