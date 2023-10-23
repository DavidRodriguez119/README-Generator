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
        choices: [`MIT`, `Apache`, `BSD 2`],
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
    return `# ${answers.projectName}
${answers.licenseBatch}

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
  - ${answers.projectMotivation} 
- What is the USER STORY of this project?
  - ${answers.userStory}
- What problem does it solve?
  - ${answers.problem}
- What did you learn?
  - ${answers.lesson}

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage Information](#usage-information)
- [License](#license)
- [Contributing](#contributing)
- [Test](#tests)
- [Questions](#questions)


## Installation

${answers.installation}

## Usage Information  

${answers.usageInfo}

## License

${answers.license}

## Contributing

### Collaborators

${answers.collaborators}

### Third-Party Assets

${answers.thirdParty}

### Additional Documentation

${answers.documentation}

## Tests

${answers.tests}

## Questions

GitHub Username: ${answers.gitHub}

GitHub Link: ${answers.gitHubLink}

Reach out at ${answers.email}`
};

// TODO: Create a function to initialize app
async function init() {
    // promt the user for the title and the description information  
    for (const question of questions){
        const {name} = question;
        const response = await inquirer.prompt(question);
        if (name === `gitHub`) {
            answers.gitHubLink = `https://github.com/${response[name]}`;
        };
        answers[name] = response[name];
        if (name === `license`){
            if (answers[name] === `MIT`) {
                answers.licenseBatch = `[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)`
            } else if (answers[name] === `Apache`) {
                answers.licenseBatch = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
            } else if (answers[name] === `BSD 2`) {
                answers.licenseBatch = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
            };
        }
    };
    // Generate README.md
    fs.writeFile(`README.md`, writeToFile(answers), (err) => 
    err ? console.log(err) : console.log(`Your page has been created :)`)
    );
};

// Function call to initialize app
init();