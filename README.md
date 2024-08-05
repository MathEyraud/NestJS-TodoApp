<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description
This is a small project created to get hands-on experience with NestJS, a progressive Node.js framework for building efficient and scalable server-side applications. This Todo List application demonstrates the basic CRUD (Create, Read, Update, Delete) operations using NestJS's powerful features.

## Features
- Create Todo: Add new todo items with a title, description, and completion status.
- Read Todos: Retrieve all todo items or a specific item by its ID.
- Update Todo: Modify existing todo items' title, description, or completion status.
- Delete Todo: Remove todo items by their ID.

## Structure
The application is structured into the following main components:
- Modules: The application is modularized with a Todo module.
- Controllers: Manages HTTP requests and responses.
- Services: Contains the business logic and data handling.
- DTOs: Data Transfer Objects for validating and structuring incoming data.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Usage
The application runs on http://localhost:3000. Use tools like Postman or cURL to interact with the following endpoints:
- GET /todos: Retrieve all todo items.
- GET /todos/:id: Retrieve a specific todo item by ID.
- POST /todos: Create a new todo item.
- PATCH /todos/:id: Update an existing todo item.
- DELETE /todos/:id: Delete a todo item.
