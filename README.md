# Parcely

This service is a multi-module service that consists of backend written in NestJs and frontend written in Angular. 
Frontend is hosted under the module `client`.
Backend is hosted under the module `server`.
Backend uses postgres as datasource. For keeping the service simple, postgres is run as container.

### Prerequisites

- Node.js and npm installed on your local development machine. You can download and install Node.js from [here](https://nodejs.org/).
- Install Angular CLI globally on your machine.
- Install Docker Desktop on you machine.
    
```bash
npm add @angular/cli
```
- Install concurrently for running multiple npm scripts concurrently.
    
```bash
npm add concurrently
```

### Installing

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Get postgres up and running 

```bash
docker-compose up -d postgres
```
Postgres is hosted on port 5432. Credentials to connect are under docker-compose.yml
4. Install both client and server dependencies with

```bash
npm install
```

You could also run the above commands using yarn.

## Running the Application

Start the application by running the following command in the project root directory:

```bash
npm start
```

This will start both the client and server concurrently. 

### Client
The frontend runs on `http://localhost:4200/` and will automatically reload if you change any of the source files.

### Server
You can access the server's swagger documentation by navigating to `http://localhost:3000/api/`.

## Built With

- [Angular](https://angular.io/) - The web framework used for the client
- [Nest.js](https://nestjs.com/) - The runtime used for the server
- [TypeScript](https://www.typescriptlang.org/) - The language used for developing the application
- [npm](https://yarnpkg.com/) - Dependency Management
- [concurrently](https://www.npmjs.com/package/concurrently) - Tool for running multiple npm scripts concurrently
