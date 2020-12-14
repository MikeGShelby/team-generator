// const Employee = require('./Employee');
// const Manager = require('./Manager');
// const Engineer = require('./Engineer');
// const Intern = require('./Intern');

// *** DEPENDENCIES ***
// npm packages
const inquirer = require('inquirer');

// personal modules
const generatePage = require('./src/page-template.js');
const writeFile = require('./utils/generate-site.js');


// empty team array to be used when promptEmployee is initialized
const teamData ={};

const promptEmployee = teamData => {
  // If there's no 'employees' array property, create one
  if (!teamData.employees) {
    teamData.employees = [];
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
        choices: ['Engineer', 'Intern', 'Manager']
    },

    {
        type: 'input',
        name: 'name',
        message: 'Provide a name for this Employee (Required):',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
                return 'Please enter a name';
            }
          }
    },

    {
        type: 'input',
        name: 'id',
        message: "Provide an id for this employee (Required):",
        validate: id => {
            const pass = id.match(/^[0-9]\d*$/);

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
        message: "Provide an email for this employee (Required):",
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
        message: "Provide an office number for this manager:",
        when: (answers) => answers.role === 'Manager',
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
  .then(employeeData => {
    teamData.employees.push(employeeData);
    if (employeeData.confirmAddEmployee) {
      return promptEmployee(teamData);
    } else {
      return teamData;
    }
  });
};

promptEmployee(teamData)
    .then(teamData => {
        return generatePage(teamData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err =>{
        console.log(err);
    });
