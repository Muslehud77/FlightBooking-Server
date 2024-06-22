# Flight Booking Server

This is the backend server for the Flight Booking project. It includes user authentication and basic CRUD operations, and it is built using Node.js, TypeScript, and Mongoose. This README file provides instructions on how to set up and run the server.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB

## Getting Started

Follow these steps to set up and run the server locally.

### 1. Clone the repository

```bash
git clone https://github.com/Muslehud77/flightBooking-server.git
cd flightBooking-server
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up the environment variables

Create a `.env` file in the root directory of the project and add the following content:

```env
NODE_ENV=development
PORT=5000
DATABASE_URI=mongodb+srv://username:password@cluster.example.mongodb.net/FlightBooking?retryWrites=true&w=majority&appName=Cluster0
HASH_SALT=12
DEFAULT_PASS=your_default_password
JWT_ACCESS_SECRET=your_jwt_access_secret
JWT_REFRESH_SECRET=your_jwt_refresh_secret
JWT_ACCESS_EXPIRES_IN=1d
JWT_REFRESH_EXPIRES_IN=365d
```

Replace the placeholder values (`username`, `password`, `your_default_password`, `your_jwt_access_secret`, and `your_jwt_refresh_secret`) with your actual values.

### 4. Run the development server

```bash
npm run start:dev
```

This will start the development server and you can access it at `http://localhost:5000`.

### 5. Build the project

To build the project for production, run:

```bash
npm run build
```

### 6. Start the production server

To start the server in production mode, run:

```bash
npm run start:prod
```

### 7. Lint the code

To lint the code and check for errors, run:

```bash
npm run lint
```

To automatically fix linting errors, run:

```bash
npm run lint:fix
```

### 8. Format the code

To format the code using Prettier, run:

```bash
npm run prettier
```

To automatically fix formatting issues, run:

```bash
npm run prettier:fix
```

## Project Structure

- `src/`: Contains the source code of the project.
- `dist/`: Contains the built code for production.
- `.env`: Environment variables file.

## Scripts

- `build`: Builds the project using TypeScript.
- `lint`: Lints the code using ESLint.
- `start:prod`: Starts the production server.
- `start:dev`: Starts the development server using `ts-node-dev`.
- `lint:fix`: Automatically fixes linting errors.
- `prettier`: Formats the code using Prettier.
- `prettier:fix`: Automatically fixes formatting issues.
- `test`: Placeholder for test script.

## Client Repository

The client-side code for this project can be found in the following repository:
[Flight Booking Client](https://github.com/Muslehud77/flightBooking-client)

---

Feel free to reach out if you have any questions or need further assistance. Happy coding!