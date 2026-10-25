# AI Mystery Room

A fictional, AI-generated investigation game. The React client explores public case evidence; the Express API keeps the solution private until an authorized accusation.

## Requirements

- Node.js 20+
- MongoDB
- A Google Gemini API key

## Setup

1. Install dependencies with `npm install`, `npm --prefix client install`, and `npm --prefix server install`.
2. Copy `server/.env.example` to `server/.env` and replace the placeholders for `MONGODB_URI` and `GEMINI_API_KEY`. Set `GEMINI_MODEL` to a supported model and `CLIENT_URL` to the frontend origin.
3. Copy `client/.env.example` to `client/.env` and set `VITE_API_BASE_URL` to the backend API URL, including `/api`.
4. Start both services with `npm run dev`.

Never commit `.env` files. For production, configure environment variables in the hosting dashboards: Vercel needs `VITE_API_BASE_URL`; Render needs `MONGODB_URI`, `GEMINI_API_KEY`, `GEMINI_MODEL`, `CLIENT_URL`, and `NODE_ENV=production`. Render supplies `PORT`.

The app is account-free. A random session token is retained in the browser for each investigation; only its SHA-256 hash is stored by the server. Cases and completed verdicts persist in MongoDB.

Without Gemini credentials the server returns an explicit configuration error; it does not substitute canned cases.
