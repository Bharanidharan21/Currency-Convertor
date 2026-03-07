# Local Development Process

This document outlines how to run and develop the Currency Converter application locally.

## Project Structure
- **/backend**: Spring Boot application (Java 21, Maven).
- **/frontend**: React application (Vite).

## Backend Development

### Prerequisites
- Java 21 or higher.
- MySQL Server running locally.

### Setup
1. Navigate to the `backend` directory.
2. Ensure your `.env` file has the correct database credentials.
3. Run the application:
   ```powershell
   ./mvnw spring-boot:run
   ```
4. The API will be available at `http://localhost:8080`.
5. Swagger documentation (OpenAPI) is available at `http://localhost:8080/swagger-ui/index.html`.

## Frontend Development

### Prerequisites
- Node.js (v18+ recommended).

### Setup
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Run the development server:
   ```powershell
   npm run dev
   ```
4. The frontend will be available at `http://localhost:5173`.

## Key Configuration Files
- `backend/.env`: Local secrets and DB config.
- `backend/src/main/resources/application.properties`: Spring Boot configuration.
- `frontend/src/apiConfig.js`: Base URL for API calls.
