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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const queries_1 = require("./queries");
const mainMenu = () => __awaiter(void 0, void 0, void 0, function* () {
    const { action } = yield inquirer_1.default.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit'
        ]
    });
    switch (action) {
        case 'View all departments':
            yield (0, queries_1.viewDepartments)();
            break;
        case 'View all roles':
            yield (0, queries_1.viewRoles)();
            break;
        case 'View all employees':
            yield (0, queries_1.viewEmployees)();
            break;
        case 'Add a department':
            const { departmentName } = yield inquirer_1.default.prompt({
                type: 'input',
                name: 'departmentName',
                message: 'Enter the name of the department:'
            });
            yield (0, queries_1.addDepartment)(departmentName);
            break;
        case 'Add a role':
            const { roleName, roleSalary, departmentId } = yield inquirer_1.default.prompt([
                { type: 'input', name: 'roleName', message: 'Enter the role title:' },
                { type: 'input', name: 'roleSalary', message: 'Enter the salary for the role:' },
                { type: 'input', name: 'departmentId', message: 'Enter the department ID for the role:' }
            ]);
            yield (0, queries_1.addRole)(roleName, parseFloat(roleSalary), parseInt(departmentId));
            break;
        case 'Add an employee':
            const { firstName, lastName, roleId, managerId } = yield inquirer_1.default.prompt([
                { type: 'input', name: 'firstName', message: 'Enter the employee\'s first name:' },
                { type: 'input', name: 'lastName', message: 'Enter the employee\'s last name:' },
                { type: 'input', name: 'roleId', message: 'Enter the employee\'s role ID:' },
                { type: 'input', name: 'managerId', message: 'Enter the employee\'s manager ID (optional):' }
            ]);
            yield (0, queries_1.addEmployee)(firstName, lastName, parseInt(roleId), managerId ? parseInt(managerId) : null);
            break;
        case 'Update an employee role':
            const { employeeId, newRoleId } = yield inquirer_1.default.prompt([
                { type: 'input', name: 'employeeId', message: 'Enter the employee ID:' },
                { type: 'input', name: 'newRoleId', message: 'Enter the new role ID:' }
            ]);
            yield (0, queries_1.updateEmployeeRole)(parseInt(employeeId), parseInt(newRoleId));
            break;
        case 'Exit':
            console.log('Goodbye!');
            process.exit();
    }
    yield mainMenu();
});
mainMenu();
