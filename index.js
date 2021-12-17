// TODO: Include packages needed for this application
// included 'inquirer' package for prompts, page-Template, and Generate Markdown to build to site/README
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const {} = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
// Initial question asks for project title and does not proceed unless one is entered.
const questions = () => {
    return inquirer.prompt([
        {
          type: 'input'
          name: 'title'
          message: 'What is the title of your project? (required)',
          validate: projectTitle => {
            if (projectTitle) {
              return true;
            } else {
              console.log('Please enter a title!');
              return false;
            }
          }  
        }
// Second question asks for project description and also does not proceed unless one is entered.
        {
            type: 'input'
            name: 'description'
            message: 'Enter a Project Description (required)',
            validate: projectDescription => {
              if (projectDescription) {
                return true;
              } else {
                console.log('Please enter a description!');
                return false;
              }
            }  
        }
// Third question asks for project install instructions if there are any.
        {
            type: 'input'
            name: 'installInstructions'
            message: 'Enter the related installation instructions if appllicable', 
        }
// Fourth question asks for project user information and does not proceed unless it is provided.
        {
            type: 'input'
            name: 'usageInfo'
            message: 'Enter the Projects Usage Information (required)',
            validate: usage => {
              if (usage) {
                return true;
              } else {
                console.log('Please enter the User Information!');
                return false;
              }
            }  
        }
// Fifth question asks for project contribution guidance and does not proceed unless it is provided.
        {
            type: 'input'
            name: 'contribGuidelines'
            message: 'Enter the Projects Contribution Guidelines (required)',
            validate: guidelines => {
              if (guidelines) {
                return true;
              } else {
                console.log('Please enter Contribution Guidelines!');
                return false;
              }
            }  
        }
// Sixth question asks for project test instructions and does not proceed unless it is provided.

        {
            type: 'input'
            name: 'testInstructions'
            message: 'Enter some project test instructions  (required)',
            validate: Instructions => {
              if (Instructions) {
                return true;
              } else {
                console.log('Please enter a description!');
                return false;
              }
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