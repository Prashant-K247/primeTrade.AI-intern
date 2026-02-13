# Scalable Task Manager API (Backend Intern Assignment)

This project is a scalable RESTful API with authentication, role-based access control, and a basic frontend interface to demonstrate API functionality. It is built using Node.js, Express, TypeScript, MongoDB, and React.

---

## Features

### Backend
- User registration and login
- Password hashing using bcrypt
- JWT-based authentication
- Role-based access control (User vs Admin)
- CRUD operations for tasks
- API versioning (`/api/v1`)
- Error handling and validation
- Modular and scalable project structure

### Frontend
- React-based UI
- User registration and login
- Protected dashboard using JWT
- Task creation and deletion
- Displays API success/error responses

### DevOps
- Dockerized full-stack setup
- One-command container startup using Docker Compose

---

## Tech Stack

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB + Mongoose
- JWT Authentication
- bcrypt

### Frontend
- React
- Vite
- Tailwind CSS
- Axios

### DevOps
- Docker
- Docker Compose

---

## Project Structure

project-root/
│
├── backend/ # Express + TypeScript API
├── frontend/ # React frontend
├── docker-compose.yml
├── postman_collection.json
└── README.md


---

## API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/auth/register` | Register user/admin |
| POST | `/api/v1/auth/login` | Login and get JWT |

### Tasks (Protected)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/tasks` | Get tasks |
| POST | `/api/v1/tasks` | Create task |
| PUT | `/api/v1/tasks/:id` | Update task |
| DELETE | `/api/v1/tasks/:id` | Delete task |

---

## Role-Based Access

### User
- Can create tasks
- Can view only their own tasks
- Can update/delete their own tasks

### Admin
- Can view all tasks
- Can update/delete any task

---

## Local Setup (Without Docker)

### Backend
```bash
cd backend
npm install
npm run dev

### Frontend
```bash
cd frontend
npm install
npm run dev

### Docker Setup

docker compose up --build

This starts:

- MongoDB container
 
- Backend API container
 
- Frontend container

### Access the app at 
- http://localhost:5173

### API Documentation

- intern-project.postman_collection.json

### Scalability Notes

- The system is designed with a modular architecture:
 
- Separate controllers, routes, models, and middleware
 
- Easy to extend with new modules
 
### It can scale using:
 
- Horizontal scaling behind a load balancer
 
- Redis caching for frequent queries
 
- Container orchestration with Docker/kubernetes
 
