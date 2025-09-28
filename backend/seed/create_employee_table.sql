-- Create Employee table script
-- Run this in SQL Server (SSMS) against your target database

-- USE [YourDatabase];
-- GO

IF OBJECT_ID('dbo.Employees', 'U') IS NOT NULL
BEGIN
    PRINT 'Table dbo.Employees already exists.';
END
ELSE
BEGIN
    CREATE TABLE dbo.Employees (
        Id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
        [Name] NVARCHAR(200) NOT NULL,
        [Position] NVARCHAR(100) NULL,
        [Department] NVARCHAR(100) NULL,
        [Salary] DECIMAL(18,2) NOT NULL
    );
    PRINT 'Created dbo.Employees';
END

-- After creating the table, you can run the insert script:
-- backend/seed/insert_sri_lankan_employees.sql
