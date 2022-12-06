const inquirer = require('inquirer');
const { addDepartment, addEmployee, addRole } = require('./prompts');

const CHOICES = {
    'VIEW_DEPARTMENTS': 'View all Departments',
    'VIEW_ROLES': 'View all Roles',
    'VIEW_EMPLOYEES': 'View all Employees',
    'ADD_DEPARTMENT': 'Add a Department',
    'ADD_EMPLOYEE': 'Add an Employee',
    'ADD_ROLE': 'Add a Role',
    'UPDATE_EMPLOYEE_ROLE': 'Update an Employee Role',
};

inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'options',
            choices: [...Object.values(CHOICES)]
        }

    ])
    .then((response) => {
        switch (response.options) {
            case CHOICES['VIEW_DEPARTMENTS']:
                // api post to view roles
                break;

            case CHOICES['VIEW_ROLES']:
                // api post to view roles
                break;

            case CHOICES['VIEW_EMPLOYEES']:
                // api post to view employee table
                break;

            case CHOICES['ADD_DEPARTMENT']:
                return addDepartment()

            case CHOICES['ADD_ROLE']:
                return addRole();

            case CHOICES['ADD_EMPLOYEE']:
                return addEmployee();

            case CHOICES['UPDATE_EMPLOYEE_ROLE']:
                break;
                // Add function for this
            default:
                break;
        }


    })
