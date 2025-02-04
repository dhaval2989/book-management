Book Management API (Koa + TypeScript)
 
This is a RESTful API built using Node.js, TypeScript, and Koa.js. The API allows for secure book management operations such as CRUD (Create, Read, Update, Delete) with JWT-based authentication. The book data is stored in-memory (within the application) instead of using a database.
 
 
--------------------------------------------------------------------
 
Table of Contents
 
1. Project Overview
 
 
2. Features
 
 
3. Technology Stack
 
 
4. Setup & Installation
 
 
5. Running the Application
 
 
6. API Endpoints
 
 
7. Troubleshooting
 
 
 
 
---------------------------------------------------------------------------
 
Project Overview
 
This project provides a book management system where users can:
 
View a list of books.
 
View book details by ID.
 
Add new books.
 
Delete books.
 
 
The API is protected by JWT authentication, ensuring only authorized users can perform the actions.
 
 
-----------------------------------------------------------------------------------------------------
 
Features
 
Authentication: Secure user authentication using JWT.
 
Book Management: Ability to CRUD books in an in-memory storage.
 
Error Handling: Handles various errors such as 404, 400, and 500.
 
Environment Configuration: Easy configuration using a .env file.
 
Scalable & Modular: Designed for scalability and easy future enhancements.
 
 
 
-------------------------------------------------------------------------------
 
Technology Stack
 
Node.js: JavaScript runtime environment for building the API.
 
TypeScript: JavaScript superset that enables type-checking and enhances developer productivity.
 
Koa.js: Web framework to build the server and APIs.
 
JWT: Authentication mechanism for secure access to API endpoints.
 
bcrypt: For securely hashing user passwords.
 
dotenv: For managing environment variables.
 
 
 
----------------------------------------------------------------------------------------------------
 
Setup & Installation
 
1. Clone the Repository
 
git clone <YOUR_GITHUB_REPO_URL>
cd book-management-api
 
2. Install Dependencies
 
npm install
 
3. Set Up Environment Variables
 
Create a .env file in the root directory and add the following content:
 
PORT=3000
JWT_SECRET=your_secret_key
 
 
----------------------------------------------------------------------------------------
 
Running the Application
 
1. Start the Server
 
To start the application, run the following command:
 
npx ts-node src/server.ts
 
You should see the following output:
 
Server running on port 3000
 
2. API Access
 
The application will be accessible at http://localhost:3000.
 
 
-------------------------------------------------------------
 
API Endpoints
 
Authentication
 
POST /login: Log in to get a JWT token.
 
Body:
 
{
  "username": "admin",
  "password": "password"
}
 
Response:
 
{
  "token": "your_jwt_token"
}
 
 
Book Management (JWT Required)
 
GET /books: Fetch all books.
 
GET /books/:id: Fetch a book by its ID.
 
POST /books: Add a new book.
 
Body:
 
{
  "title": "The Harry Potter",
  "author": "J. K. Rowling",
  "price": 30.14,
  "stock": 6
}
 
DELETE /books/:id: Delete a book by its ID.
 
 
Note: Include the JWT token in the Authorization header for all book management routes:
 
Authorization: Bearer <your_jwt_token>
 