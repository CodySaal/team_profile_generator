const inquirer = require("inquirer")
const fs = require("fs")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const generateProfile = require("./src/generateCards")


const inputArray = []
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
        name: "office",
    },
])
.then((answers) => {
    answers.role = "manager"
    inputArray.push(answers)
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
                inputArray.push(answers)
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
                inputArray.push(answers)
            })
            .then(() => {
                addAnother()
            })
            .catch(err => console.log(err))
        } else if (answer.team === "Finished building team") {
            inputArray.forEach((teamMember) => {
                if (teamMember.office) {
                    // New Manager
                    const man = new Manager(teamMember.name, teamMember.id, teamMember.email, teamMember.office)
                    // Instead of pushing to team array can I just generate the html card now?
                    teamArray.push(man)
                } else if (teamMember.github) {
                    // New Engineer
                    const eng = new Engineer(teamMember.name, teamMember.id, teamMember.email, teamMember.github)
                    // Instead of pushing to team array can I just generate the html card now?
                    teamArray.push(eng)
                } else {
                    // New Intern
                    const int = new Intern(teamMember.name, teamMember.id, teamMember.email, teamMember.school)
                    // Instead of pushing to team array can I just generate the html card now?
                    teamArray.push(int)
                }
            })
            const profile = generateProfile(teamArray)
            fs.writeFileSync("./dist/index.html", profile )
        }
    })
}