"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEmployeeRole = exports.addEmployee = exports.addRole = exports.addDepartment = exports.viewEmployees = exports.viewRoles = exports.viewDepartments = void 0;
const connection_1 = require("./connection");
// View all departments
const viewDepartments = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield connection_1.client.query('SELECT * FROM department');
    console.table(res.rows);
});
exports.viewDepartments = viewDepartments;
// View all roles
const viewRoles = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield connection_1.client.query('SELECT * FROM role');
    console.table(res.rows);
});
exports.viewRoles = viewRoles;
// View all employees
const viewEmployees = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield connection_1.client.query(`
        SELECT e.id, e.first_name, e.last_name, r.title AS role, d.name AS department, r.salary, m.first_name AS manager
        FROM employee e
        LEFT JOIN role r ON e.role_id = r.id
        LEFT JOIN department d ON r.department_id = d.id
        LEFT JOIN employee m ON e.manager_id = m.id
    `);
    console.table(res.rows);
});
exports.viewEmployees = viewEmployees;
// Add a department
const addDepartment = (departmentName) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.client.query('INSERT INTO department (name) VALUES ($1)', [departmentName]);
    console.log(`${departmentName} added to departments.`);
});
exports.addDepartment = addDepartment;
// Add a role
const addRole = (title, salary, departmentId) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.client.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, departmentId]);
    console.log(`${title} role added.`);
});
exports.addRole = addRole;
// Add an employee
const addEmployee = (firstName, lastName, roleId, managerId) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.client.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [firstName, lastName, roleId, managerId]);
    console.log(`${firstName} ${lastName} added as an employee.`);
});
exports.addEmployee = addEmployee;
// Update employee role
const updateEmployeeRole = (employeeId, newRoleId) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.client.query('UPDATE employee SET role_id = $1 WHERE id = $2', [newRoleId, employeeId]);
    console.log(`Employee's role updated.`);
});
exports.updateEmployeeRole = updateEmployeeRole;
