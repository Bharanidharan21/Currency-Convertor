# Deployment Guide (Render)

This guide explains how to host the Backend and Frontend on Render.

## 1. Backend Deployment (Docker)

Render can build and run your Spring Boot application using the `Dockerfile` provided in the `backend` directory.

### Steps:
1. Push your code to a GitHub/GitLab repository.
2. Log in to [Render](https://render.com/).
3. Create a **New Web Service**.
4. Connect your repository.
5. **Root Directory**: `backend`
6. **Environment**: `Docker`
7. **Environment Variables**: Add the following in Render's dashboard:
   - `DB_URL`: Your hosted database URL (e.g., from Render MySQL or Aiven).
   - `DB_USERNAME`: Your DB username.
   - `DB_PASSWORD`: Your DB password.
   - `API_KEY`: Your Exchange Rate API key.
   - `APP_API_KEY`: Your internal API key.

## 2. Frontend Deployment (Static Site)

### Steps:
1. Create a **New Static Site** on Render.
2. Connect the same repository.
3. **Root Directory**: `frontend`
4. **Build Command**: `npm run build`
5. **Publish Directory**: `dist`
6. **Important**: After the backend is deployed, get the Backend URL and update `frontend/src/apiConfig.js` with that URL. Push the change to trigger a redeploy of the frontend.

## 3. Database Deployment
- You can use Render's **Managed MySQL** (requires a paid plan) or a free tier provider like **Aiven** or **Tidey**.
- Once created, update the `DB_URL` in the Backend environment variables.
