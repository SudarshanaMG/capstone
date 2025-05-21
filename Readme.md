#  Construction Estimation Web Application

This is a full-stack web application designed for Homeowners, Admins, and Contractors to collaborate on construction estimation projects. It allows homeowners to submit construction inputs, admins to manage users and contractors, and contractors to calculate accurate material and cost estimations.

---

##  Features

###  Authentication & Authorization
- JWT-based login for Homeowners, Admins, and Contractors
- Role-based access control (`homeowner`, `admin`)
  
###  User Management
- Register, Login, View, Update user
- Admin-only user management panel

###  Homeowner Module
- Add and view construction inputs
- View cost estimates

###  Contractor Module
- View assigned homeowner inputs
- Calculate estimates for material and cost

###  Admin Dashboard
- Manage all users and contractors
- Monitor all estimation activities

---

##  Frontend Routes

| Role       | Path                        | Description                     |
|------------|-----------------------------|---------------------------------|
| Public     | `/login`                    | Login page                      |
| Homeowner  | `/home`                     | Home dashboard                  |
|            | `/inputs`                   | View submitted inputs           |
|            | `/new-estimation-inputs`    | Submit new input                |
|            | `/estimates`                | View input's estimate           |
| Admin      | `/dashboard`                | Admin dashboard                 |
|            | `/admin/users`              | Manage users                    |
|            | `/admin/contractors`        | Manage contractors              |
| Contractor | `/contractor-login`         | Contractor login                |
|            | `/contractor-dashboard`     | Assigned inputs list            |

---

##  Backend API Structure

### User APIs
```
POST    /api/users/register
POST    /api/users/login
GET     /api/users/profile
PUT     /api/users/profile/:id
DELETE  /api/users/profile/:id
POST    /api/users/forgot-password
POST    /api/users/reset-password/:token
GET     /api/users/all           # Admin only
```

### Input APIs
```
GET     /api/inputs/
POST    /api/inputs/
PUT     /api/inputs/:id
GET     /api/inputs/getid/:id
GET     /api/inputs/getByName
GET     /api/inputs/getByEmail
PATCH   /api/inputs/:id/set-contractorid/:contractorId
POST    /api/inputs/:id/set-estimation-done
GET     /api/inputs/contractor/:contractorId
```

### Contractor APIs
```
POST    /api/contractors/login
POST    /api/contractors/addcontractor
GET     /api/contractors/
GET     /api/contractors/:id
GET     /api/contractors/:id/with-inputs
PATCH   /api/contractors/:id/availability
GET     /api/contractors/specialization
PUT     /api/contractors/:id
DELETE  /api/contractors/:id
```

### Material Estimation APIs
```
POST    /api/materials/calculate
GET     /api/materials/estimate/:inputId
```

### Cost Estimation APIs
```
POST    /api/estimations/calculate/:inputId
GET     /api/estimations/
GET     /api/estimations/:inputId
```

---

##  Tech Stack

### Frontend
- Angular (with role-based routing and guards)


### Backend
- Node.js + Express.js
- MongoDB + Mongoose
- JWT for authentication

---

##  Project Structure

```
backend/
├── user-service/
├── user-input/
├── contractor-service/
├── estimation-service/
├── material-service/
└── docker-compose.yml

frontend/
├── src/app/components
│   ├── login/
│   ├── register/
│   ├── home/
│   ├── inputs/
│   ├── estimations/
│   ├── new-estimation-inputs/
│   ├── edit-page/
│   ├── dashboard/
│   ├── user-management/
│   ├── contractor-management/
│   ├── contractor-login/
│   └── contractor-dashboard/
└── angular.json
```

---

##  Setup Instructions

###  Backend Setup and Frontend Setup

```bash
# Create .env and configure DB_URI, JWT_SECRET, etc.
docker-compose up --build

```




---

##  Access Control Summary

| Feature                       | Homeowner | Contractor |
|-------------------------------|-----------|------------|
| Submit/View Inputs            | ✅        | View only  |
| View Estimate                 | ✅        | ✅         |
| Calculate Estimate            | ❌        | ✅         |
| Assign Contractors            | ❌        | ❌         |
| Manage Users(Admin only)      | ❌        | ❌         |
| Manage Contractors(Admin only)| ❌        | ❌         |

---


##  Contributors

- Shyam Kumar
- Sudarshana M G


