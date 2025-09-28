BIT21504  - Web Related Frameworks II 
Assignment 
Submission Date : Before september 28 - 11.59 PM 
Total Marks 100% 
Practical Assignment: Building a CRUD Application with ASP.NET Core Web API and Angular 
Objective: 
Develop a CRUD (Create, Read, Update, Delete) application using ASP.NET Core Web API as the backend 
and Angular as the frontend. The application will manage a simple Employee Management System. 
Assignment Requirements: 
1. Backend - ASP.NET Core Web API (with MSSQL) 
 Create a new ASP.NET Core Web API project. 
 Use Entity Framework Core to interact with a MSSQL database. 
 Implement a model for an Employee with the following properties:  
public class Employee 
{ 
} 
public int Id { get; set; } 
public string Name { get; set; } 
public string Position { get; set; } 
public string Department { get; set; } 
public decimal Salary { get; set; } 
 Create a DbContext and configure it to connect to a MSSQL database. 
 Generate Migrations and update the database. 
 Implement a Controller (EmployeesController) that exposes RESTful endpoints:  
o GET /api/employees → Get all employees 
o GET /api/employees/{id} → Get employee by ID 
o POST /api/employees → Add a new employee 
o PUT /api/employees/{id} → Update an existing employee 
o DELETE /api/employees/{id} → Delete an employee 
Page 1 
of222 
2. Frontend - Angular Application 
 Create a new Angular project using the Angular CLI. 
 Install Angular Material for UI components. 
 Set up Employee Service (employee.service.ts) to call the Web API using HttpClient. 
 Create Employee List Component to display all employees in a table. 
 Implement Add/Edit Employee Form using Reactive Forms. 
 Implement a Delete Confirmation Dialog before removing an employee. 
 Use Angular Routing for navigation between components. 
Deliverables: 
1. GitHub Repository containing the full source code. 
2. Postman Collection (or Swagger) for testing API endpoints. 
3. Database SQL Script for creating the Employee table. 
4. Screenshots of the working application (Frontend & Backend). 
Bonus Points: 
 Implement Pagination & Search in the employee list. 
 Use Angular Material Snackbar for user notifications. 
 Add a Dockerfile for both backend and frontend.
