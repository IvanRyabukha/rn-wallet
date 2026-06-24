# React Native Wallet App

A personal full-stack mobile wallet application built with React Native, Node.js, Express, Firebase Authentication and PostgreSQL.

The project is focused on mobile UI development, authentication flow, backend API integration, transaction data handling and basic full-stack application structure.

## Tech Stack

### Mobile App

* React Native CLI
* JavaScript / React
* React Navigation
* Firebase Authentication
* Custom React Native styles
* Global style tokens for colors, spacing and theme values
* Light / dark theme support

### Backend

* Node.js
* Express.js
* PostgreSQL
* Neon PostgreSQL
* REST API
* CORS configuration
* Environment-based configuration

## Features

* User authentication with Firebase Authentication
* Mobile wallet UI built with React Native
* Transaction list and transaction data fetching
* Basic CRUD operations for wallet-related data
* Client-server communication through REST API
* PostgreSQL database integration via Neon
* Reusable style tokens and shared theme values
* Basic light / dark theme handling
* Separated `client` and `server` application structure

## Project Structure

```txt
.
├── client/   # React Native mobile application
├── server/   # Node.js / Express backend
└── README.md
```

## What I Practiced

* Building a mobile application with React Native CLI
* Creating reusable UI components and shared style tokens
* Handling authentication with Firebase Authentication
* Connecting a mobile client to a custom backend API
* Building a small Express server
* Working with PostgreSQL through Neon
* Structuring a full-stack project with separate client and server layers
* Managing environment variables for API, database and authentication configuration

## Environment Variables

The project uses environment variables for backend and external service configuration.

Example server environment variables:

```env
PORT=5000
DATABASE_URL=your_neon_postgres_database_url
```

Firebase configuration should be added according to the client application setup.

> The real environment variables are not included in the repository.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/IvanRyabukha/REPOSITORY_NAME.git
cd REPOSITORY_NAME
```

### 2. Install server dependencies

```bash
cd server
npm install
```

### 3. Start the backend server

```bash
npm run dev
```

### 4. Install mobile app dependencies

```bash
cd ../client
npm install
```

### 5. Start the React Native app

```bash
npm start
```

Then run the application on Android or iOS according to your local React Native environment setup.

## Screenshots

Screenshots will be added later.

## Status

Personal full-stack mobile project.
The main goal of this project is to practice React Native development, authentication, backend API integration and PostgreSQL-based data persistence.
