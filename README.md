# Full Stack Blog with Auth

**Intern ID:** CITS3306 
**Name:** Tanushri V  
**Project:** Full-Stack Blog with Auth

## Description
A full-stack blog application with user authentication using Node.js, Express, MongoDB, and React.

## Features
- User authentication (register, login, JWT)
- Create, edit, delete blog posts
- Protected routes
- Author information on posts

## Tech Stack
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs
- **Frontend:** React, Vite, React Router, Axios
- **Authentication:** JWT-based with protected routes

## Installation

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Environment Variables
Create `backend/.env` with:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Usage
1. Register a new account
2. Login to get a JWT token
3. Navigate to "Create" to write posts
4. View all posts on home page
5. See your posts in "My Posts"
