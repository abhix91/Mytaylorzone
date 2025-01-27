# Mytaylorzone
# Clothing App for Women

This is a *Clothing App for Women* that offers a wide range of clothing options. The application is built using the *MERN stack* (MongoDB, Express, React, Node.js) and styled with *Tailwind CSS*. It provides features such as user authentication, product browsing, cart management, and checkout. The app is fully deployed and accessible online.

---

## Features

- *User Authentication*: 
  - Secure registration and login system.
  - Passwords are hashed using bcrypt for security.

- *Product Catalog*: 
  - Wide variety of women's clothing, including ethnic and western wear.
  - Dynamic product display fetched from the backend.

- *Cart Management*: 
  - Add, remove, and update items in the cart.
  - User-specific cart management stored in MongoDB.
  - Real-time total price calculation and quantity adjustments.

- *Responsive Design*: 
  - Fully responsive layout designed with Tailwind CSS.
  - Optimized for desktop, tablet, and mobile devices.

- *Backend API*:
  - RESTful API for user management, cart operations, and product handling.
  - JWT-based session management for secure interactions.

---

## Tech Stack

### Frontend
- *React.js*: Framework for building user interfaces.
- *Tailwind CSS*: Utility-first CSS framework for fast and responsive design.
- *Axios*: Library for handling API requests.

### Backend
- *Node.js*: Server-side runtime for JavaScript.
- *Express.js*: Lightweight framework for building RESTful APIs.
- *MongoDB*: NoSQL database for storing user and cart information.

---
## Demo

### Screenshot
![App Screenshot](./Screenshots/1.png)
![App Screenshot](./Screenshots/2.png)
![App Screenshot](./Screenshots/3.png)


## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- *Node.js* (v14 or higher)
- *MongoDB* (local or cloud instance)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/clothing-app.git
   cd clothing-app
   */
# 🚀 TaskLearn API

TaskLearn Backend is the server-side application powering the TaskLearn platform. It provides APIs for managing skills, chapters, and user interactions, integrating Prisma for database management and JWT for authentication.

---

## 📋 Prerequisites

Before getting started, ensure you have the following installed:

- **[Node.js](https://nodejs.org/)** (version 16.x or higher)
- **[MySQL](https://dev.mysql.com/downloads/)** (or any other database supported by Prisma, configured as per the `prisma/schema.prisma` file)
- **[Prisma CLI](https://www.prisma.io/docs/getting-started)** (for database migrations)

---

## ⚙️ Setup

### 1. Clone the Repository
Clone the repository to your local machine:
```bash
git clone https://github.com/GRID-R-D/tasklearn-backend.git
cd tasklearn-backend

```
### 2. Install Dependencies
  ```bash
npm install

```
### 3. Configure Environment Variables

### 4. Apply Database Migrations
  ```bash
 npm run migrate
```
### 5. Run the Development Server
 ``` bash
npm start
```
  

