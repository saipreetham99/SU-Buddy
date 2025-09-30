# SU Buddy

SU Buddy is a full-stack web application that helps Syracuse University students meet classmates, explore campus groups, and stay connected. The project pairs a React + Vite frontend with an Express/MongoDB backend and includes email verification, profile management, and curated discovery tools for clubs and departments.

## Features

- **Student onboarding** – Collects rich profile data, validates `@syr.edu` emails, enforces strong passwords, and uploads profile photos to Cloudinary during registration. Accounts remain disabled until verified via an emailed confirmation link.
- **Authentication & authorization** – Issues JWT tokens on login so the frontend can request the current user's profile and other protected resources.
- **People directory** – Returns only verified users and supports searching by name prefix, graduation year, and department filters.
- **Group discovery** – Lets students browse academic branches and clubs, then bookmark groups into a personal chat list for quick access.
- **Responsive UI** – Uses Tailwind CSS, Headless UI, and Heroicons to deliver an accessible experience optimized for desktop and mobile.

## Tech stack

| Area      | Technology |
|-----------|------------|
| Frontend  | React 18, Vite, React Router, Tailwind CSS |
| Backend   | Node.js, Express, Mongoose |
| Database  | MongoDB |
| Auth      | JSON Web Tokens (JWT) |
| Media     | Cloudinary |
| Email     | Nodemailer (SMTP) |

## Project structure

```
SU-Buddy/
├── README.md
├── package.json          # Frontend dependencies & scripts
├── src/                  # React application
├── public/
├── server/               # Express API & database models
│   ├── index.js
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── helper/
│   └── utils/
└── ...
```

## Prerequisites

- Node.js 18+
- npm 9+
- A MongoDB connection string
- SMTP credentials for sending verification emails
- Cloudinary account credentials (or update `server/helper/cloudinaryconfig.js` to match your provider)

## Environment variables

Create a `.env` file inside the `server/` directory with the following keys:

```env
MONGO_URL=<your MongoDB connection string>
JWT_SECRET=<random secret for signing JWTs>
JWT_EXPIRE=100h               # Optional override
BASE_URL=http://localhost:8000 # Used to build email verification links
USER=<smtp username used to send mail>
PASS=<smtp password>
```

> **Note:** The sample Cloudinary configuration in `server/helper/cloudinaryconfig.js` is checked into the repository for demonstration purposes. Replace it with your own credentials before deploying.

## Installation

Install dependencies for both the client and server:

```bash
npm install            # Frontend (run from the repository root)
cd server && npm install
```

## Running the app locally

In separate terminals:

```bash
# Terminal 1 – start the API on http://localhost:8000
cd server
npm start

# Terminal 2 – start the Vite dev server on http://localhost:5173
npm run dev
```

The frontend is preconfigured to send API requests to `http://localhost:8000` and will include credentials on every request.

## Available scripts

From the repository root:

- `npm run dev` – Start the Vite development server.
- `npm run build` – Create a production build of the React app.
- `npm run preview` – Preview the production build locally.
- `npm run lint` – Run ESLint with the project's rules.

From the `server/` directory:

- `npm start` – Run the Express server with Nodemon for hot reloads.

## API overview

| Method | Route                     | Description |
|--------|--------------------------|-------------|
| GET    | `/`                      | Health check for the auth service. |
| POST   | `/register`              | Register a new user, upload an avatar, and send a verification email. |
| POST   | `/login`                 | Authenticate a verified user and issue a JWT. |
| GET    | `/:id/verify/:token`     | Verify an email address from a mailed token. |
| GET    | `/users`                 | Fetch all verified users. |
| GET    | `/users/search`          | Search verified users with optional name, graduation year, and department filters. |
| GET    | `/api/user`              | Resolve the profile for the currently authenticated user via JWT. |

## Troubleshooting

- If registration fails, check that every required field is populated, the password meets complexity requirements, and the uploaded image is JPEG, PNG, or WebP.
- Ensure MongoDB is running and reachable via the `MONGO_URL` connection string.
- Email verification requires working SMTP credentials; inspect the server logs if the message does not send.
- When updating Cloudinary settings, confirm the configured account allows unsigned uploads from your development environment.

## License

This project is released under the ISC license. See [`server/package.json`](server/package.json) for author details.
