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
    {
        type: `input`,
        name: `installation`,
        message: `What are the steps required to install your project?`
    },
    {
        type: `input`,
        name: `usageinfo`,
        message: `Provide instructions for the use of your application:`
    },
    {
        type: `list`,
        name: `license`,
        message: `What license are you using for your project?`,
        choices: [`MIT`, `GNU-V3.0`, `Apache`, `BSD 2`],
    },
    {
        type: `input`,
        name: `collaborators`,
        message: `List the people that helped you with your application:`
    },
    {
        type: `input`,
        name: `thirdParty`,
        message: `Did you use any third-party assets that require attribution? If not just type N/A`
    },
    {
        type: `input`,
        name: `documentation`,
        message: `Did you use any additional documentation that requires attribution? If not just type N/A`
    },
    {
        type: `input`,
        name: `tests`,
        message: `Provide examples on how to run the test for your application. If this does't apply to your app type type N/A`
    },
    {
        type: `input`,
        name: `gitHub`,
        message: `What is your GitHub username?`
    },
    {
        type: `input`,
        name: `email`,
        message: `What is your E-mail?`
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
};

// Function call to initialize app
init();