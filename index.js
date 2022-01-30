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

//intern questions
const internQuestions = () => {
    inquirer
    .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the interns name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the interns id number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the interns email?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school did the intern attend?',
        },
    ])
    .then((answers) => {
        const newIntern = new Intern (
            answers.name,
            answers.id,
            answers.email,
            answers.school,
        );
        interns.push(newIntern);
        compileTeamMember();
    });
};

//manager questions
const managerQuestions = () => {
    inquirer
    .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the managers id number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the managers email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the managers office number?',
        },
    ])
    .then((answers) => {
        const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber,
        );
        managers.push(newManager);
        compileTeamMember();
    });
};