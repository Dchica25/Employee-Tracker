import inquirer from 'inquirer';
import {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
} from './queries';

const mainMenu = async () => {
    const { action } = await inquirer.prompt({
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
            await viewDepartments();
            break;
        case 'View all roles':
            await viewRoles();
            break;
        case 'View all employees':
            await viewEmployees();
            break;
        case 'Add a department':
            const { departmentName } = await inquirer.prompt({
                type: 'input',
                name: 'departmentName',
                message: 'Enter the name of the department:'
            });
            await addDepartment(departmentName);
            break;
        case 'Add a role':
            const { roleName, roleSalary, departmentId } = await inquirer.prompt([
                { type: 'input', name: 'roleName', message: 'Enter the role title:' },
                { type: 'input', name: 'roleSalary', message: 'Enter the salary for the role:' },
                { type: 'input', name: 'departmentId', message: 'Enter the department ID for the role:' }
            ]);
            await addRole(roleName, parseFloat(roleSalary), parseInt(departmentId));
            break;
        case 'Add an employee':
            const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
                { type: 'input', name: 'firstName', message: 'Enter the employee\'s first name:' },
                { type: 'input', name: 'lastName', message: 'Enter the employee\'s last name:' },
                { type: 'input', name: 'roleId', message: 'Enter the employee\'s role ID:' },
                { type: 'input', name: 'managerId', message: 'Enter the employee\'s manager ID (optional):' }
            ]);
            await addEmployee(firstName, lastName, parseInt(roleId), managerId ? parseInt(managerId) : null);
            break;
        case 'Update an employee role':
            const { employeeId, newRoleId } = await inquirer.prompt([
                { type: 'input', name: 'employeeId', message: 'Enter the employee ID:' },
                { type: 'input', name: 'newRoleId', message: 'Enter the new role ID:' }
            ]);
            await updateEmployeeRole(parseInt(employeeId), parseInt(newRoleId));
            break;
        case 'Exit':
            console.log('Goodbye!');
            process.exit();
    }

    await mainMenu();
};

mainMenu();
