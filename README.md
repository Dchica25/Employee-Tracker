# Employee-Tracker

## Description

The **Employee Tracker** is a command-line application that allows business owners and managers to view and manage the employees, roles, and departments in their organization. This application uses **Node.js**, **Inquirer**, and **PostgreSQL** to provide an easy-to-use interface for interacting with the company’s employee database.

### Key Features:
- View all departments, roles, and employees in the company.
- Add new departments, roles, and employees to the database.
- Update employee roles.
- The application uses PostgreSQL as a backend database to store and manage the data.

---

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Features](#features)
4. [Mock-Up](#mock-up)
5. [Video Walkthrough](#video-walkthrough)
6. [License](#license)

---

## Installation

1. Clone the repository to your local machine:
Navigate into the project directory:

bash
Copy code
cd employee-tracker
Install the required dependencies:

bash
Copy code
npm install
Set up your PostgreSQL database by running the following commands in your PostgreSQL terminal (make sure to replace yourDatabase, yourUsername, and yourPassword with your actual PostgreSQL credentials):

Create the database:

sql
Copy code
CREATE DATABASE yourDatabase;
Set up the schema: You can use the schema.sql file included in the project directory to create the necessary tables:

bash
Copy code
\i schema.sql
Add sample data using the seed.sql file:

bash
Copy code
\i seed.sql
Create a .env file to store your database credentials:

makefile
Copy code
DB_USER=yourUsername
DB_HOST=localhost
DB_DATABASE=yourDatabase
DB_PASSWORD=yourPassword
DB_PORT=5432
Usage
To run the application, simply run:

bash
Copy code
node index.js
The application will prompt you with a list of actions you can choose from. These include:

View all departments
View all roles
View all employees
Add a department
Add a role
Add an employee
Update an employee role
Use the arrow keys to navigate through the options and provide the necessary input when prompted.

Features
View All Departments:
Displays a list of all departments in the company along with their department IDs.
View All Roles:
Displays job titles, department names, and salary information for all roles in the company.
View All Employees:
Displays employee data, including employee IDs, names, roles, departments, and managers.
Add a Department:
Prompted to enter the name of a department, which is then added to the database.
Add a Role:
Prompted to enter the title, salary, and department ID for a new role, which is added to the database.
Add an Employee:
Prompted to enter the first name, last name, role ID, and manager ID for a new employee.
Update an Employee Role:
Allows you to select an employee and update their role in the company.
Mock-Up
The following video shows an example of the application being used from the command line:


Video Walkthrough
A detailed walkthrough video demonstrating the functionality of the Employee Tracker application and how it meets the acceptance criteria can be found at the link above. The video will show how the application is used, including adding departments, roles, and employees, as well as updating employee roles.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact

