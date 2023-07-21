
## Project Title: MERN CRUD Application with User Management

## Overview
This project is a full-stack MERN (MongoDB, Express.js, React, Node.js) application that demonstrates how to perform CRUD (Create, Read, Update, Delete) operations on a "users" collection in a MongoDB database. The application consists of both the backend API and the frontend user interface, allowing users to interact with the system seamlessly.

The main purpose of this project is to provide a practical example of building a complete web application from scratch, showcasing best practices in modern web development, and demonstrating essential features such as data management, input validation, error handling, and user authentication (optional).

## Features

- Create User 
- Get all User

## Prerequisites

- Node.js and npm installed on your machine.
- MongoDB server running locally or connection details to a remote MongoDB server.

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/mallick1126/mernTask.git
   cd mernTask
   ```

2. **Backend Setup:**

   - Navigate to the `server` folder:

     ```bash
     cd server
     ```

   - Install backend dependencies:

     ```bash
     npm install
     ```

   - Create a `.env` file in the `server` folder and add the following variables:

     ```
     PORT=5555
     MONGODB_URI=mongodb://localhost/mern_task_db
     SECRET_KEY=your_secret_key
     ```

   - Replace `your_secret_key` with your preferred secret key for JWT token generation.

   - Start the backend server:

     ```bash
     npm start
     ```

3. **Frontend Setup:**

   - Navigate to the `client` folder:

     ```bash
     cd client
     ```

   - Install frontend dependencies:

     ```bash
     npm install
     ```

   - Start the development server:

     ```bash
     npm start
     ```

4. **Open in Browser:**

   - Visit `http://127.0.0.1:5174/` in your browser to access the application.

5. **User Creation:**

   - On the homepage, click on the "create user" link to create a new user.

6. **Get all user:**

   - After Creating user, use fetch users to fetch all the users.


## Conclusion

This MERN CRUD application provides an excellent starting point for building web applications with user management functionalities. It emphasizes good development practices, responsiveness, and data handling, making it a valuable reference for developers looking to build real-world applications with the MERN stack. Optional features such as user authentication, pagination, and search functionality extend the capabilities of the application, showcasing additional techniques to enhance user experience and data management. Feel free to explore, modify, and extend the project to suit your specific requirements. Happy coding!
