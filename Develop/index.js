// TODO: Include packages needed for this application
// included 'inquirer' package for prompts, page-Template, and Generate Markdown to build to site/README
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const {} = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// Initial question asks for project title and does not proceed unless one is entered.
const questions = () => {
    return inquirer.prompt([
        {
          type: 'input'
          name: 'name'
          message: 'What is the title of your project? (required)',
          validate: projectTitle => {
            if (projectTitle) {
              return true;
            } else {
              console.log('Please enter a title!');
              return false;
            }

        }
    ])

};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();