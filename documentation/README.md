# Employee Management System - Full Stack (Backend & Frontend)

This project consists of an ASP.NET Core Web API backend and an Angular frontend for managing employees. Both services can be run locally or using Docker.

---

## Prerequisites

- Docker (recommended for easiest setup)
- Or, for manual/local development:
  - .NET 8 SDK (for backend)
  - Node.js 20+ and npm (for frontend)
  - SQL Server (for backend database)

---

## Quick Start with Docker

### 1. Backend (ASP.NET Core Web API)

1. Open a terminal and navigate to:
   ```
   cd backend/EmployeeManagementSystem
   ```
2. Build the Docker image:
   ```
   docker build -t employee-backend .
   ```
3. Run the backend container (adjust connection string as needed):
   ```
   docker run -e "ConnectionStrings__DefaultConnection=Server=host.docker.internal\\SQLEXPRESS;Database=bit21504_EmployeeManagement_c113310;Trusted_Connection=True;TrustServerCertificate=True;" -p 5000:5000 employee-backend
   ```
   - The API will be available at `http://localhost:5000`.
   - Swagger UI: `http://localhost:5000/swagger`

### 2. Frontend (Angular)

1. Open a new terminal and navigate to:
   ```
   cd frontend/employee-management
   ```
2. Build the Docker image:
   ```
   docker build -t employee-frontend .
   ```
3. Run the frontend container:
   ```
   docker run -p 4200:80 employee-frontend
   ```
   - The app will be available at `http://localhost:4200`
   - Make sure the frontend is configured to call the backend at `http://localhost:5000/api/employees`

---

## Manual Local Development

### Backend
1. Configure your SQL Server connection in `backend/EmployeeManagementSystem/appsettings.json`.
2. Restore and build:
   ```
   cd backend/EmployeeManagementSystem
   dotnet restore
   dotnet ef database update
   dotnet run
   ```
   - API: `http://localhost:5192` (or as shown in terminal)
   - Swagger: `/swagger`

### Frontend
1. Install dependencies:
   ```
   cd frontend/employee-management
   npm install --legacy-peer-deps
   ```
2. Start the Angular dev server:
   ```
   npm start
   ```
   - App: `http://localhost:4200`

---

## API Endpoints
- `GET    /api/employees`         - Get all employees
- `GET    /api/employees/{id}`    - Get employee by ID
- `POST   /api/employees`         - Add a new employee
- `PUT    /api/employees/{id}`    - Update an employee
- `DELETE /api/employees/{id}`    - Delete an employee

---

## Notes
- Ensure SQL Server is running and accessible to the backend (use `host.docker.internal` for Docker on Windows).
- Adjust connection strings as needed for your environment.
- For any issues, please contact the project maintainer.
