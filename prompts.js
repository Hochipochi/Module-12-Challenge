const inquirer = require('inquirer');

const addDepartment = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Add a Department:',
            name: 'input',

        }
    ]).then((reponse => {
        // use post /api/department response.input
    }))
}

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the employees First Name?: ',
            name: 'input',

        },
        {
            type: 'input',
            message: 'What is the employees Last Name?: ',
            name: 'input',
        },
        {
            type: 'input',
            message: 'What department does the employee work in?: ',
            name: 'input',
        }
    ]).then((reponse => {
        // use post /api/department response.input
    }))
}

const addRole = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the Role? :',
            name: 'input',

        },
        {
            type: 'input',
            message: 'What is the Salary of the Role? :',
            name: 'input',

        }
    ]).then((reponse => {
        // use post /api/department response.input
    }))
}

module.exports = { addDepartment, addEmployee, addRole };