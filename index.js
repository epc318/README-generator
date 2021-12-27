// TODO: Include packages needed for this application
// included 'inquirer' package for prompts, page-Template, and Generate Markdown to build to site/README
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
// Initial question asks for project title and does not proceed unless one is entered.
const questions = () => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'projectName',
          message: 'What is the title of your project? (required)',
          validate: projectTitle => {
            if (projectTitle) {
              return true;
            } else {
              console.log('Please enter a title!');
              return false;
            }
          }  
        },
// This question asks for project description and also does not proceed unless one is entered.
        {
            type: 'input',
            name: 'description',
            message: 'Enter a Project Description (required)',
            validate: projectDescription => {
              if (projectDescription) {
                return true;
              } else {
                console.log('Please enter a description!');
                return false;
              }
            }  
        },
// This question asks for project install instructions if there are any.
        {
            type: 'input',
            name: 'installInstructions',
            message: 'Provide installation and setup instructions necessary to run the application',
            validate: install => {
              if (install) {
                return true;
              } else {
                console.log('Please provide setup/installation instructions!');
                return false;
              }
            }  
        },
// This question asks for project usage information and does not proceed unless it is provided.
        {
            type: 'input',
            name: 'usageInfo',
            message: 'Please indicate how to use this application',
            validate: usage => {
              if (usage) {
                return true;
              } else {
                console.log('Please enter usage (how-to) information!');
                return false;
              }
            }  
        },
// This question asks for project contribution guidance and does not proceed unless it is provided.
        {
            type: 'input',
            name: 'contribGuidelines',
            message: 'Enter the Projects Contribution Guidelines',
            validate: guidelines => {
              if (guidelines) {
                return true;
              } else {
                console.log('Please enter contribution guidelines, even if no contributions are being accepted!');
                return false;
              }
            }  
        },
// This question asks for project test instructions and does not proceed unless it is provided.
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Enter some project tests accompanied instructions.',
            validate: Instructions => {
              if (Instructions) {
                return true;
              } else {
                console.log('Please enter a description!');
                return false;
              }
            }  
        },
// This question asks if the user wants a license badge included on their README.
        {
            type: 'confirm',
            name: 'licensePresent',
            message: 'Would you like to add badge indicating the projects license usage?',
            default: false
        },
// This question provides the user with a list of licenses to choose from.
        {
            type: 'list',
            name: 'licenseType',
            message: 'Please choose a license to apply',
            choices: ['Apache 2.0', 'MPL 2.0', 'Boost 1.0', 'MIT', 'GNU GPL 3.0', 'Affero GPL 3.0'],
            when: ({licensePresent}) => {
              if(licensePresent) {
                return true;
              } else{
                return false;
              }            
            }
        },   
// The next questions simply ask the user for some contact information.
        {
            type: 'input',
            name: 'githubName',
            message: 'What is your Github username?',
            validate: (github) => {
              if(github) {
                return true;
              } else{
                console.log('Please enter your Github username!');
                return false;
              }            
            }
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your current email address?',
          validate: (emailAddress) => {
            if(emailAddress) {
              return true;
            } else{
              console.log('Please enter your email address!');
              return false;
            }            
          }
      },
    ])
};

// TODO: Create a function to write README file
function writeToFile(data) {
  return new promises((resolve, reject) => {
    fs.writeFile('./README.md', data , err => {
      if (err) {
        reject (err);
        return;
      }
// if everything was accepted the promise is resovled and a message send indicating file creation     
      resolve({
        ok: true,
        message: 'File Successfully Created!'
      });
    });
  });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();