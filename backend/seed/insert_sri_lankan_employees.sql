-- Insert sample Sri Lankan employees into dbo.Employees
-- Adjust database context (USE [YourDatabase]) if needed
-- Assumes table dbo.Employees with columns: Id (IDENTITY), Name, Position, Department, Salary

-- USE [YourDatabase];
-- GO

INSERT INTO dbo.Employees ([Name], [Position], [Department], [Salary])
VALUES
  ('Kamal Perera',        'Software Engineer',     'IT',       120000.00),
  ('Nimal Silva',         'Systems Analyst',       'IT',       110000.00),
  ('Sunil Fernando',      'HR Manager',            'HR',       98000.00),
  ('Chamara Jayawardena', 'Accountant',            'Finance',  85000.00),
  ('Asha Kumari',         'Marketing Executive',   'Marketing',72000.00),
  ('Dinuka Perera',       'QA Engineer',           'IT',       80000.00),
  ('Priyantha Rodrigo',   'Project Manager',       'IT',       150000.00),
  ('Samadhi Wijesinghe',  'Business Analyst',      'Business', 105000.00),
  ('Himalika Senanayake', 'UX Designer',           'Design',   78000.00),
  ('Ruwan Bandara',       'DevOps Engineer',       'IT',       125000.00),
  ('Nethmi Perera',       'Data Scientist',        'Data',     140000.00),
  ('Kasun Silva',         'Support Engineer',      'Support',  65000.00),
  ('Madhawa Kumara',      'Network Engineer',      'IT',       90000.00),
  ('Yasodha Gunarathne',  'Content Writer',        'Marketing',56000.00),
  ('Tharindu Hansana',    'Frontend Developer',    'IT',       95000.00),
  ('Lasantha Perera',     'Backend Developer',     'IT',       115000.00),
  ('Anushka de Silva',    'HR Officer',            'HR',       70000.00),
  ('Ranga Senarath',      'Sales Executive',       'Sales',    68000.00),
  ('Kanchana Dias',       'Office Admin',          'Admin',    48000.00),
  ('Hashan Fernando',     'Intern',                'IT',       30000.00);

-- Verify
-- SELECT TOP (20) * FROM dbo.Employees ORDER BY Id DESC;
-- SELECT COUNT(*) AS EmployeeCount FROM dbo.Employees;
