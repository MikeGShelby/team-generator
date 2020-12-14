// const Employee = require('./Employee');
// const Manager = require('./Manager');
// const Engineer = require('./Engineer');
// const Intern = require('./Intern');

// *** DEPENDENCIES ***
// npm packages
const inquirer = require('inquirer');

// core library modules
const fs = require('fs');

// personal modules
const generatePage = require('./src/page-template.js');

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


// const mockData = {
//         employees: [
//             {
//             role: 'Engineer',
//             name: 'Mike',
//             id: 1,
//             email: 'mikegshelby@gmail.com',
//             github: 'mikegshelby',
//             confirmAddEmployee: true
//             },

//             {
//             role: 'Manager',
//             name: 'Manager Name',
//             id: 2,
//             email: 'manager@gmail.com',
//             officeNumber: 560,
//             confirmAddEmployee: true
//             },

//             {
//             role: 'Engineer',
//             name: 'engineer 2',
//             id: 6,
//             email: 'eng@gmail.com',
//            github: 'githubAccount',
//             confirmAddEmployee: true
//             },

//             {
//             role: 'Intern',
//             name: 'Intern Name',
//             id: 8,
//             email: 'intern@gmail.com',
//             school: 'UH',
//             confirmAddEmployee: false
//             }
//     ]
// }

// const pageHTML = generatePage(mockData);
// fs.writeFile('./dist/index.html', pageHTML, err => {
//               if (err) throw new Error(err);

//               console.log('Page created! Check out index.html in this the ./dist directory to see it!');
//             });


promptEmployee(teamData)
  .then(teamData => {
        const pageHTML = generatePage(teamData);

        fs.writeFile('./dist/index.html', pageHTML, err => {
          if (err) throw new Error(err);

          console.log('Page created! Check out index.html in this the ./dist directory to see it!');
        });
  });


