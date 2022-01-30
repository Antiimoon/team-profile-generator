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
            topHtmlFile();
            managerGenerator();
            engineerGenerator();
            internGenerator();
            bottomHtmlFile();
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

const deleteHtml = () => {
    fs.unlinkSync('./index.html');
};

const topHtmlFile = () => {
    fs.appendFileSync('index.html', generateHTML());
};

const managerGenerator = () => {
    managers.forEach((manager => {
        fs.appendFileSync('index.html', generateMgr(manager));
    }));
};

const engineerGenerator = () => {
    engineers.forEach((engineer => {
        fs.appendFileSync('index.html', generateEng(engineer));
    }));
};

const internGenerator = () => {
    interns.forEach((intern => {
        fs.appendFileSync('index.html', generateIntern(intern));
    }));
};

const bottomHtmlFile = () => {
    fs.appendFileSync('index.html', generateBtm());
};

//engineer card html
const generateEng = (engineer) => {
    return `<div class="container mb-3 card-custom shadow-lg border-primary rounded">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            <h2 class="engineer">Engineer
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alien" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M11 17a2.5 2.5 0 0 0 2 0" />
                <path d="M12 3c-4.664 0 -7.396 2.331 -7.862 5.595a11.816 11.816 0 0 0 2 8.592a10.777 10.777 0 0 0 3.199 3.064c1.666 1 3.664 1 5.33 0a10.777 10.777 0 0 0 3.199 -3.064a11.89 11.89 0 0 0 2 -8.592c-.466 -3.265 -3.198 -5.595 -7.862 -5.595z" />
                <line x1="8" y1="11" x2="10" y2="13" />
                <line x1="16" y1="11" x2="14" y2="13" />
            </svg>
            </h2>     
        </div>
    </div>
            <div class="employee">
                <p>Name: ${engineer.name}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>Id: ${engineer.id}</p>
                <p>Role: ${engineer.role}</p>
                <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
</div>`
}

 //manager card html
const generateMgr = (manager) => {
    return `<div class="container mb-3 card-custom shadow-lg border-primary rounded">
    <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
            <h2 class="manager">Manager
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-drone" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 10h4v4h-4z" />
                <line x1="10" y1="10" x2="6.5" y2="6.5" />
                <path d="M9.96 6a3.5 3.5 0 1 0 -3.96 3.96" />
                <path d="M14 10l3.5 -3.5" />
                <path d="M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96" />
                <line x1="14" y1="14" x2="17.5" y2="17.5" />
                <path d="M14.04 18a3.5 3.5 0 1 0 3.96 -3.96" />
                <line x1="10" y1="14" x2="6.5" y2="17.5" />
                <path d="M6 14.04a3.5 3.5 0 1 0 3.96 3.96" />
            </svg>
            </h2>
        </div>
    </div>
            <div class="employee">
                <p>Name: ${manager.name}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Id: ${manager.id}</p>
                <p>Role: ${manager.role}</p>
                <p>Office Number: ${manager.officeNumber}</p>
        </div>
</div>`
}

const generateBtm = () => {
    return `</body>
    </html>`

}
