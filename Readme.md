# 🏗️ Construction Estimation Web Application

This is a full-stack web application designed for Homeowners, Admins, and Contractors to collaborate on construction estimation projects. It allows homeowners to submit construction inputs, admins to manage users and contractors, and contractors to calculate accurate material and cost estimations.

---

## 🚀 Features

### 🔐 Authentication & Authorization
- JWT-based login for Homeowners, Admins, and Contractors
- Role-based access control (`homeowner`, `admin`, `contractor`)
  
### 👤 User Management
- Register, Login, View, Update, Delete Users
- Password Reset via Email
- Admin-only user management panel

### 🏠 Homeowner Module
- Add and view construction inputs
- View material and cost estimates
- View assigned contractor (if any)

### 🛠️ Contractor Module
- View assigned homeowner inputs
- Calculate estimates for material and cost
- Update availability and specialization

### 🧑‍💼 Admin Dashboard
- Manage all users and contractors
- Assign contractors to user inputs
- Monitor all estimation activities

---

## 🧭 Frontend Routes

| Role       | Path                        | Description                     |
|------------|-----------------------------|---------------------------------|
| Public     | `/`                         | Login page                      |
| Homeowner  | `/home`                     | Home dashboard                  |
|            | `/home/inputs`              | View submitted inputs           |
|            | `/home/add-input`           | Submit new input                |
|            | `/home/estimates/:inputId`  | View input's estimate           |
| Admin      | `/admin`                    | Admin dashboard                 |
|            | `/admin/users`              | Manage users                    |
|            | `/admin/contractors`        | Manage contractors              |
|            | `/admin/contractors/:id/inputs` | View contractor inputs      |
| Contractor | `/contractor`               | Contractor dashboard            |
|            | `/contractor/inputs`        | Assigned inputs list            |
|            | `/contractor/input/:id/estimate` | Estimate form                |

---

## 🌐 Backend API Structure

### User APIs
```http
POST    /api/users/register
POST    /api/users/login
GET     /api/users/profile
PUT     /api/users/profile/:id
DELETE  /api/users/profile/:id
POST    /api/users/forgot-password
POST    /api/users/reset-password/:token
GET     /api/users/all           # Admin only

GET     /api/inputs/
POST    /api/inputs/
PUT     /api/inputs/:id
GET     /api/inputs/getid/:id
GET     /api/inputs/getByName
GET     /api/inputs/getByEmail
PATCH   /api/inputs/:id/set-contractorid/:contractorId
POST    /api/inputs/:id/set-estimation-done
POST    /api/inputs/:id/assign-contractor
GET     /api/inputs/contractor/:contractorId

POST    /api/contractors/login
POST    /api/contractors/addcontractor
GET     /api/contractors/
GET     /api/contractors/:id
GET     /api/contractors/:id/with-inputs
PATCH   /api/contractors/:id/availability
GET     /api/contractors/available
GET     /api/contractors/specialization
PUT     /api/contractors/:id
DELETE  /api/contractors/:id

POST    /api/materials/calculate
GET     /api/materials/estimate/:inputId

POST    /api/estimations/calculate/:inputId
GET     /api/estimations/
GET     /api/estimations/:inputId
