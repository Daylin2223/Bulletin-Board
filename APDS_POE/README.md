# Daylin Shadrach - APDS7311 - PoePart2  and Part 3 - ReadMe

## Task
#Backend
Part 2 — Develop the backend (Marks: 120)

Develop the backend API as per the lab guide – part 2. This includes the following:
- Setup MongoDB in the cloud
- Generate SSL certificate and private key
- Get/Create/Delete posts
- Register new user / Login existing user

Ensure:
- All calls to the database and API use SSL
- Cross-Origin resource sharing (CORS) is catered for
- Passwords are not stored or compared using free text
- Separate routes for posts and users are implemented and protected
- Login Information is persisted after authentication

## Project Overview
This project is a backend API for a bulletin board system created for the National Government with the purpose of sharing issues via posts. The API handles user registration, authentication, post management, and secure data storage. The project adheres to various security and functional requirements, as outlined in the task description.

## How to Install and Run the Project (Visual Studio Code)

### Prerequisites
- Node.js and npm installed
- MongoDB Atlas account (for cloud MongoDB)
- SSL certificate and private key files
- A code editor (e.g., Visual Studio Code)

### Project Setup
1. Clone the project repository from [repository URL].
2. Install project dependencies by running the following command in your project directory:
   ```bash
   npm install
   
### frontend
###Part 3 overview 
This project is a frontent API for a bulletin board system created for the National Government with the purpose of sharing issues via posts. The API handles user registration, authentication, post management, and secure data storage. The project adheres to various security and functional requirements, as outlined in the task description.

### Prerequisites
- Node.js and npm installed
- MongoDB Atlas account (for cloud MongoDB)
- SSL certificate and private key files
- A code editor (e.g., Visual Studio Code)

### Project Setup
1. Clone the project repository from [repository URL].
2. Install project dependencies by running the following command in your project directory:
   ```bash
   npm install

### frontend features 
login and registeration - extra fetaures input vaildation and toastify message dialog and abilty to show password (check box).
dashbard with createpost and view post buttons.

### frontend errors 
create post is not creating can not fetch the token to create the post.
