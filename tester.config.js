[
  {
    "name": "GET - Fetch all users",
    "method": "GET",
    "url": "http://localhost:3000/api/users",
    "expectedStatus": 200
  },
  {
    "name": "POST - Create user",
    "method": "POST",
    "url": "http://localhost:3000/api/users",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": {
      "name": "Jane Doe",
      "email": "jane@example.com"
    },
    "expectedStatus": 201
  },
  {
    "name": "PUT - Update user",
    "method": "PUT",
    "url": "http://localhost:3000/api/users/1",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": {
      "name": "Jane Doe Updated",
      "email": "updated@example.com"
    },
    "expectedStatus": 200
  },
  {
    "name": "DELETE - Remove user",
    "method": "DELETE",
    "url": "http://localhost:3000/api/users/1",
    "expectedStatus": 204
  }
]
