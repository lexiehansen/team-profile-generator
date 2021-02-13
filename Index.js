const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const fs = require("fs");

const employeeArray = [];

function initialize() {
    console.log("Welcome to the Team Profile Generator! Please begin by adding a manager.")
    addManager();
}

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your manager's name? (Required)",
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log("Please enter your manager's name!");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'officeNumber',
            message: "Enter your manager's office phone number (Required)",
            validate: officeNumberInput => {
              if (officeNumberInput) {
                return true;
              } else {
                console.log("Please enter your manager's office phone number!");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: "Enter your manager's email (Required)",
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log("Please enter your manager's email!");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'managerID',
            message: "Enter your manager's Employee ID (Required)",
            validate: idInput => {
              if (idInput) {
                return true;
              } else {
                console.log("Please enter your manager's Employee ID!");
                return false;
              }
            }
        },
    ])

        .then(function (data) {
            const name = data.name
            const id = data.managerID
            const email = data.email
            const officeNumber = data.officeNumber
            const teamMember = new Manager(name, id, email, officeNumber)
            employeeArray.push(teamMember)
            addTeamMembers();
        });

}

function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            name: "addNewMember",
            message: "What would you like to do next? (Required)",
            choices: ["Add an engineer", "Add an intern", "Complete team profile"],
            validate: addNewMemberInput => {
                if (addNewMemberInput) {
                  return true;
                } else {
                  console.log('Please choose an option!');
                  return false;
                }
              }
        }
    ])

        .then(function (data) {

                if (data.addNewMember === "Add an engineer") {
                    addEngineer();

                } else if (data.addNewMember === "Add an intern") {
                    addIntern();

                } else {
                    generateTeam();
                }
        });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your engineer's name? (Required)",
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log("Please enter your engineer's name!");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'github',
            message: "Enter your engineer's GitHub Username (Required)",
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log("Please enter your engineer's GitHub username!");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: "Enter your engineer's email (Required)",
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log("Please enter your engineer's email!");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'engineerID',
            message: "Enter your engineer's Employee ID (Required)",
            validate: idInput => {
              if (idInput) {
                return true;
              } else {
                console.log("Please enter your engineer's Employee ID!");
                return false;
              }
            }
        },
    ])

        .then(function (data) {
            const name = data.name
            const id = data.engineerID
            const email = data.email
            const github = data.github
            const teamMember = new Engineer(name, id, email, github)
            employeeArray.push(teamMember)
            addTeamMembers()
        });

};

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your intern's name? (Required)",
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log("Please enter your intern's name!");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'school',
            message: "Enter your intern's school name (Required)",
            validate: schoolInput => {
              if (schoolInput) {
                return true;
              } else {
                console.log("Please enter your intern's school name!");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: "Enter your intern's email (Required)",
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log("Please enter your intern's email!");
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'internID',
            message: "Enter your intern's Employee ID (Required)",
            validate: idInput => {
              if (idInput) {
                return true;
              } else {
                console.log("Please enter your intern's Employee ID!");
                return false;
              }
            }
        },
    ])

        .then(function (data) {
            const name = data.name
            const id = data.internID
            const email = data.email
            const school = data.school
            const teamMember = new Intern(name, id, email, school)
            employeeArray.push(teamMember)
            addTeamMembers()
        });

};

function generateTeam() {

    const htmlArray = []
    const htmlBeginning = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <div class="bg-info">
            <h1>My Team</h1>
        </div>
        <div class="container-fluid">
        `
        htmlArray.push(htmlBeginning);

        for (let i = 0; i < employeeArray.length; i++) {
            let object = `
            <div class="card">
                <div class="card-title">
                    <h2>${employeeArray[i].name}</h2>
                    <h4>${employeeArray[i].title}</h4>
                </div>
                <div class="card-body">
                    <p>Employee ID: ${employeeArray[i].id}</p>
                    <p>Email: <a href="mailto:${employeeArray[i].email}">${employeeArray[i].email}</a></p>
                    `
                    if (employeeArray[i].officeNumber) {
                    object += `
                    <p>Phone Number: ${employeeArray[i].officeNumber}</p>
                    `
                    }
                    if (employeeArray[i].github) {
                object += `
                    <p>GitHub: <a href="https://github.com/${employeeArray[i].github}">${employeeArray[i].github}</a></p>
                    `
                    }
                    if (employeeArray[i].school) {
                    object += `
                    <p>School: ${employeeArray[i].school}</p>
                    `
                    }
                    object += `
                </div>
            </div>
            `
            htmlArray.push(object)
            }

            const htmlEnd = `
        </div>
    </body>
    </html>
    `
    htmlArray.push(htmlEnd);

    fs.writeFile(`./dist/myTeam.html`, htmlArray.join(""), function (err) {
        console.log("Completed! You can view your 'My Team' file in the dist folder.")
    })
}

initialize();
