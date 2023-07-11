# Simple Blog Application API

This is a RESTful API for a simple blog application built using Node.js and Express.js. It provides CRUD operations (Create, Read, Update, Delete) for managing blog posts.

## Features

- Create a new blog post
- Retrieve all blog posts
- Retrieve a specific blog post by ID
- Update an existing blog post
- Delete a blog post

## Prerequisites

- Node.js 
- Git

## Getting Started

Follow the steps below to set up and use the API:

1. Clone the repository:
   ` git clone https://github.com/Vinaykumarkummarikuntla/enverx-be-developer-assignment.git`
2. Change into the project directory:
3. Install the dependencies:
   `npm install`
4. Start the server:
 `npm start`

5. The API is now running locally on `http://localhost:4000`. You can use a tool like [Postman](https://www.postman.com/) to interact with the endpoints.

**Note**: This API uses an in-memory object to store the blog posts instead of a local database for simplicity and ease of setup. Therefore, the data will not persist beyond the current session. When the server is restarted, the blog posts will be reset.

## API Endpoints

The following endpoints are available:

- `GET /posts` - Retrieve all blog posts
- `GET /posts/:id` - Retrieve a specific blog post by ID
- `POST /posts` - Create a new blog post
- `PUT /posts/:id` - Update an existing blog post
- `DELETE /posts/:id` - Delete a blog post







