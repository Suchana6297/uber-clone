# User Registration Endpoint

## POST /users/register

### Description
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body
The request body should be a JSON object with the following properties:
- `fullname`: An object containing:
  - `firstname`: A string representing the user's first name (minimum 3 characters).
  - `lastname`: A string representing the user's last name (minimum 3 characters, optional).
- `email`: A string representing the user's email (must be a valid email).
- `password`: A string representing the user's password (minimum 6 characters).

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: 201 Created
- **Response Body**:
  ```json
  {
    "token": "jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### User Already Exists
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "message": "User already exist"
  }
  ```

### Notes
- Ensure that the email provided is unique.
- Passwords are hashed before being stored in the database.

# User Login Endpoint

## POST /users/login

### Description
This endpoint is used to log in an existing user. It requires the user's email and password.

### Request Body
The request body should be a JSON object with the following properties:
- `email`: A string representing the user's email (must be a valid email).
- `password`: A string representing the user's password (minimum 6 characters).

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "token": "jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Invalid Credentials
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Notes
- Ensure that the email and password provided are correct.
- A JWT token is returned upon successful login.

# User Profile Endpoint

## GET /users/profile

### Description
This endpoint is used to retrieve the profile of the currently authenticated user.

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
  ```

#### Unauthorized
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Authentication required"
  }
  ```

### Notes
- This endpoint requires authentication. Ensure the request includes a valid JWT token.

# User Logout Endpoint

## GET /users/logout

### Description
This endpoint is used to log out the currently authenticated user.

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "message": "Logged out"
  }
  ```

#### Unauthorized
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Authentication required"
  }
  ```

### Notes
- This endpoint requires authentication. Ensure the request includes a valid JWT token.
- The JWT token is invalidated upon logout.

# Captain Registration Endpoint

## POST /captains/register

### Description
This endpoint is used to register a new captain. It requires the captain's first name, last name, email, password, and vehicle details.

### Request Body
The request body should be a JSON object with the following properties:
```json
{
  "fullname": {
    "firstname": "John", // string, minimum 3 characters
    "lastname": "Doe" // string, minimum 3 characters, optional
  },
  "email": "john.doe@example.com", // string, must be a valid email
  "password": "password123", // string, minimum 6 characters
  "vehicle": {
    "color": "red", // string, minimum 3 characters
    "plate": "ABC123", // string, minimum 3 characters
    "capacity": 4, // integer, minimum 1
    "vehicleType": "car" // string, must be one of 'car', 'motorcycle', 'auto'
  }
}
```

### Responses

#### Success
- **Status Code**: 201 Created
- **Response Body**:
  ```json
  {
    "token": "jwt_token",
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      },
      {
        "msg": "Color must be at least 3 characters long",
        "param": "vehicle.color",
        "location": "body"
      },
      {
        "msg": "Plate must be at least 3 characters long",
        "param": "vehicle.plate",
        "location": "body"
      },
      {
        "msg": "Capacity must be at least 1",
        "param": "vehicle.capacity",
        "location": "body"
      },
      {
        "msg": "Invalid vehicle type",
        "param": "vehicle.vehicleType",
        "location": "body"
      }
    ]
  }
  ```

#### Captain Already Exists
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "message": "Captain already exists"
  }
  ```

### Notes
- Ensure that the email provided is unique.
- Passwords are hashed before being stored in the database.

# Captain Login Endpoint

## POST /captains/login

### Description
This endpoint is used to log in an existing captain. It requires the captain's email and password.

### Request Body
The request body should be a JSON object with the following properties:
```json
{
  "email": "john.doe@example.com", // string, must be a valid email
  "password": "password123" // string, minimum 6 characters
}
```

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "token": "jwt_token",
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Invalid Credentials
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Notes
- Ensure that the email and password provided are correct.
- A JWT token is returned upon successful login.

# Captain Profile Endpoint

## GET /captains/profile

### Description
This endpoint is used to retrieve the profile of the currently authenticated captain.

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
  ```

#### Unauthorized
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Authentication required"
  }
  ```

### Notes
- This endpoint requires authentication. Ensure the request includes a valid JWT token.

# Captain Logout Endpoint

## GET /captains/logout

### Description
This endpoint is used to log out the currently authenticated captain.

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "message": "Logged out"
  }
  ```

#### Unauthorized
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Authentication required"
  }
  ```

### Notes
- This endpoint requires authentication. Ensure the request includes a valid JWT token.
- The JWT token is invalidated upon logout.
