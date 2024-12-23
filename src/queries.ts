import { client } from './connection';

// View all departments
export const viewDepartments = async () => {
    const res = await client.query('SELECT * FROM department');
    console.table(res.rows);
};

// View all roles
export const viewRoles = async () => {
    const res = await client.query('SELECT * FROM role');
    console.table(res.rows);
};

// View all employees
export const viewEmployees = async () => {
    const res = await client.query(`
        SELECT e.id, e.first_name, e.last_name, r.title AS role, d.name AS department, r.salary, m.first_name AS manager
        FROM employee e
        LEFT JOIN role r ON e.role_id = r.id
        LEFT JOIN department d ON r.department_id = d.id
        LEFT JOIN employee m ON e.manager_id = m.id
    `);
    console.table(res.rows);
};

// Add a department
export const addDepartment = async (departmentName: string) => {
    await client.query('INSERT INTO department (name) VALUES ($1)', [departmentName]);
    console.log(`${departmentName} added to departments.`);
};

// Add a role
export const addRole = async (title: string, salary: number, departmentId: number) => {
    await client.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, departmentId]);
    console.log(`${title} role added.`);
};

// Add an employee
export const addEmployee = async (firstName: string, lastName: string, roleId: number, managerId: number | null) => {
    await client.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', 
        [firstName, lastName, roleId, managerId]);
    console.log(`${firstName} ${lastName} added as an employee.`);
};

// Update employee role
export const updateEmployeeRole = async (employeeId: number, newRoleId: number) => {
    await client.query('UPDATE employee SET role_id = $1 WHERE id = $2', [newRoleId, employeeId]);
    console.log(`Employee's role updated.`);
};
