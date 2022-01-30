const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

const managers = [];
const engineers = [];
const interns = [];

const compileTeamMember = () => {
    inquirer
    .prompt ([
        {
            type: 'confirm',
            name: 'compileTeamMember',
            message: 'Would you like to add another team member?',
        },
    ])
    .then((answers) => {
        if(answers.compileTeamMember === true) {
            question1();
        } else {
            console.log(managers, engineers, interns);
            module.exports = managers;
            module.exports = engineers;
            module.exports = interns;
            deleteHtml();
            managerGenerator();
            engineerGenerator();
            internGenerator();
            return answers;
        }
    });
};

const question1 = () => {
    inquirer
    .prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'What is employees role?',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
    ])
    .then((answers) => {
        if (answers.role === 'Manager') {
            managerQuestions();
        } else if (answers.role === 'Engineer') {
            engineerQuestions();
        } else if (answers.role === 'Intern') {
            internQuestions();
        }
    });
};

question1();

//engineer questions
const engineerQuestions = () => {
    inquirer
    .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is engineers name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is engineers id number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is engineers email?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is engineers github username (case sensitive)?',
        },
    ])
    .then((answers) => {
        const newEngineer = new Engineer (
            answers.name,
            answers.id,
            answers.email,
            answers.github
        );
        engineers.push(newEngineer);
        compileTeamMember();
    });
};