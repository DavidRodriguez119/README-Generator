// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        name: `projectName`,
        message: `What is the title of your project?`
    },
    {
        type: `input`,
        name: `projectMotivation`,
        message: `What was the motivation behind the project?`
    },
    {
        type: `input`,
        name: `userStory`,
        message: `What is the USER STORY of the project?`
    },
    {
        type: `input`,
        name: `lesson`,
        message: `What did you learn while developing this project?`
    },
];
const answers = {};

// TODO: Create a function to write README file
function writeToFile(answers) {

};

// TODO: Create a function to initialize app
async function init() {
    // promt the user for the title and the description information  
    for (const question of questions){
        const {name} = question;
        const response = await inquirer.prompt(question);
        answers[name] = response[name]
    };
    writeToFile(answers);
}

// Function call to initialize app
init();