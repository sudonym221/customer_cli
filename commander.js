#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');
const {
    addCustomer,
    findCustomer,
    updateCustomer,
    listCustomers,
    removeCustomer
} = require('./index');

// Add customer questions
const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Customer first name'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Customer last name'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Customer phone numeber'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Customer email address'
    }
]

program
    .version('1.0.0')
    .description('Client Management System')

                    // program
                    //     .command('add <firstname> <lastname> <phone> <email>')
                    //     .alias('a')
                    //     .description('Add a customer')
                    //     .action((firstname, lastname, phone, email) => {
                    //         addCustomer({firstname, lastname, phone, email});
                    //     });

// Add command
program
    .command('add')
    .alias('a')
    .description('Add a customer')
    .action(() => {
        prompt(questions).then(answers => {
            addCustomer(answers);
        });
    });

// Find command
program
    .command('find <name>')
    .alias('f')
    .description('Find a customer')
    .action(name => findCustomer(name));

// Update command
program
    .command('update <_id>')
    .alias('u')
    .description('update a customer')
    .action((_id) => {
        prompt(questions).then(answers => {
            updateCustomer(_id, answers);
        });
    });

// Remove command
program
    .command('remove <_id>')
    .alias('r')
    .description('Remove a customer')
    .action(_id => removeCustomer(_id));

// List command
program
    .command('list')
    .alias('l')
    .description('List customers')
    .action(() => {
        listCustomers();
    })

program.parse(process.argv);