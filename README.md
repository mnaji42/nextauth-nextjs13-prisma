# NextAuth Integration with Next.js 13

This project aims to demonstrate the integration of NextAuth.js authentication into a Next.js 13 application while utilizing the `app/api` directory of Next.js 13 instead of the traditional `pages/api` directory.

## Project Overview

In this project, we have implemented NextAuth.js for authentication within a Next.js 13 application. We implemented authentication using the Credential Provider, which necessitates a username/email and password for authentication. PostgreSQL was utilized as the database, with Prisma introduced to streamline database interactions.

### Key Features

- Integration of NextAuth.js for authentication.
- Use of the `app/api` directory structure for API routes.
- User registration functionality with Prisma and PostgreSQL.
- Protection of routes using various methods.
- Customization of session data and JWT.

## Getting Started

To run this project on your local machine, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/) as your package manager.

### Installation

1. Clone this repository to your local machine:

```bash
  git clone https://github.com/mnaji42/nextauth-nextjs13-prisma.git
```

2. Navigate to the project directory:

```bash
  cd nextauth-nextjs13-prisma
```

3. Install the project dependencies:

using yarn:

```bash
  yarn
```

or using npm:

```bash
  npm install
```

### Configuration

1. Create a `.env` file in the root directory of the project and add the following environment variables:

```env
  NEXTAUTH_SECRET=my_ultra_secure_nextauth_secret
  NEXTAUTH_URL=http://localhost:3000

  POSTGRES_HOST=127.0.0.1
  POSTGRES_PORT=6500
  POSTGRES_USER=admin
  POSTGRES_PASSWORD=password123
  POSTGRES_DB=nextauth_prisma

  DATABASE_URL=postgresql://admin:password123@localhost:6500/nextauth_prisma?schema=public
```

These are example values that work, but you can and should modify them to match your own database and security requirements. Ensure that the NEXTAUTH_SECRET is a secure secret key and that the DATABASE_URL corresponds to your PostgreSQL database connection details.

1. To launch the PostgreSQL database, you can use Docker Compose. If you haven't already, make e you have Docker installed on your machine and run:

```bash
docker-compose up -d
```

This command will start the PostgreSQL database container with the provided configuration.

### Run the Application

Start the development server:

using yarn:

```bash
  yarn dev
```

or using npm:

```bash
  npm run dev
```

The application should now be running locally at http://localhost:3000.
