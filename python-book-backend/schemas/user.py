def userEntity(item) -> dict:
    return {
    "id": str(item["_id"]),
    "username": item["username"],
    "password": item["password"],
    "role": item["role"],
    "token": item["token"]
    }

def usersEntity(entity) -> list:
    return [userEntity(item) for item in entity]