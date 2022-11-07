const inquirer = require("inquirer")

const teamArray = []

// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
inquirer.prompt([
    {
        type: "input",
        message: "What is the name of the team manager?",
        name: "name",
    },
    {
        type: "number",
        message: "What is the team manager's employee ID?",
        name: "id",
    },
    {
        type: "input",
        message: "What is the team manager's email address?",
        name: "email",
    },
    {
        type: "number",
        message: "What is the team manager's office number?",
        name: "name",
    },
])
.then((answers) => {
    answers.role = "manager"
    teamArray.push(answers)
    addAnother()
})
.catch(err => console.log(err))

// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
function addAnother() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add an engineer, intern, or are you finished building your team?",
            name: "team",
            choices: ["Engineer", "Intern", "Finished building team"]
        }
    ])
    .then((answer) => {
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
        if (answer.team === "Engineer") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is the engineer's name?",
                    name: "name",
                },
                {
                    type: "number",
                    message: "What is the engineer's employee ID?",
                    name: "id",
                },
                {
                    type: "input",
                    message: "What is the enginner's email?",
                    name: "email",
                },
                {
                    type: "input",
                    message: "What is the engineer's GitHub username?",
                    name: "github",
                },
            ])
            .then((answers) => {
                teamArray.push(answers)
            })
            .then(() => {
                addAnother()
            })
            .catch(err => console.log(err))
        } else if (answer.team === "Intern") {
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
            inquirer.prompt([
                {
                    type: "input",
                    message: "What is the intern's name?",
                    name: "name",
                },
                {
                    type: "number",
                    message: "What is the intern's employee ID?",
                    name: "id",
                },
                {
                    type: "input",
                    message: "What is the intern's email?",
                    name: "email",
                },
                {
                    type: "input",
                    message: "What school is the intern from?",
                    name: "school",
                },
            ])
            .then((answers) => {
                teamArray.push(answers)
            })
            .then(() => {
                addAnother()
            })
            .catch(err => console.log(err))
        } else if (answer.team === "Finished building team") {
            console.log("The teamArray needs to be used to generate the HTML")
        }
    })
}