// const generatePage = require('./src/page-template.js');
// const Employee = require('./Employee');
// const Manager = require('./Manager');
// const Engineer = require('./Engineer');
// const Intern = require('./Intern');

// // const pageHTML = generatePage(arg1, arg1, arg1, arg1);

// *** DEPENDENCIES ***
// npm packages
const inquirer = require('inquirer');

// core library modules
const fs = require('fs');

// personal modules
const generatePage = require('./src/page-template.js');


const promptManager = () => {
  return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "Please provide a name for your team's manager",
    },

    {
        type: 'input',
        name: 'id',
        message: "Please provide an id for the team manager",
        validate: id => {
            const pass = id.match(/^[1-9]\d*$/);

            if (pass) {
                return true;
            } else {
                return 'Please enter an id that is a positive number';
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: "Please provide an email for the team manager",
        validate: email => {
            const pass = email.match(/[@]/);

            if (pass) {
                return true;
            } else {
                return 'Please enter a valid email address';
            }
        }
    },

    {
        type: 'input',
        name: 'officeNumber',
        message: "Please provide an office number for the team manager",
        validate: officeNumber => {
            const pass = officeNumber.match(/^[1-9]\d*$/);

            if (pass) {
                return true;
            } else {
                return 'Please enter an office number that is a positive number';
            }
        }
    },
  ]);
};

const promptEmployee = portfolioData => {
  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }

    console.log(`
  ===========================
  Add an Employee to the Team
  ===========================
  `);

  return inquirer.prompt([
    {
        type: 'list',
        name: 'role',
        message: 'What type of employee would you like to add to this team?',
        choices: ['Engineer', 'Intern', 'I am done adding employees to this team']
    },

    {
        type: 'input',
        name: 'name',
        message: "Provide a name for this employee:",
        validate: name => {
            const pass = name.match(/[a-zA-Z]/);

            if (pass) {
                return true;
            } else {
                return 'Please enter a name';
            }
        }
    },

    {
        type: 'input',
        name: 'id',
        message: "Provide an id for this employee:",
        validate: id => {
            const pass = id.match(/^[1-9]\d*$/);

            if (pass) {
                return true;
            } else {
                return 'Please enter an id that is a positive number';
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: "Provide an email for this employee",
        validate: email => {
            const pass = email.match(/[@]/);

            if (pass) {
                return true;
            } else {
                return 'Please enter a valid email address';
            }
        }
    },

    {
        type: 'input',
        name: 'github',
        message: "Provide a github username for this engineer:",
        when: (answers) => answers.role === 'Engineer',
    },

    {
        type: 'input',
        name: 'school',
        message: 'Provide current school name for this intern:',
        when: (answers) => answers.role === 'Intern',
    },

    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add another employee?',
        default: false
    }
  ])
  .then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddEmployee) {
      return promptEmployee(portfolioData);
    } else {
      return portfolioData;
    }
  });
};

promptManager()
  .then(promptEmployee)
  .then(portfolioData => {
    return console.log(portfolioData)
  });

