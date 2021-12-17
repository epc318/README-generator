// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
// change "data.title" to something else
  return `
  # ${data.title}

  ## Project Description
  ${data.description}

  ## Table of Contents
  *[Description](#description)
  *[Installation Instructions](#installation)
  *[Usage Guidelines](#usage)
  *[Licensing](#license)
  *[Testing](#tests)
  *[Contribution](#contribution)
  *[Questions/Concerns](#questions)

  ## Installation
  ${data.installInstructions}

  ## Usage
  ${data.usageInfo}
  ### Licensing
  ${data.installInstructions}
  ${renderLicenseSection(data)}

  ## Testing
  ${data.testInstructions}

  ## Contribution
  ${data.contribGuidelines}

  ## Questions?
  If you have any questions, comments, or concerns with this project, please don't hesitate to contct me through github [Github Profile] (https://github.com/xxxxxxxx).
`;
}


module.exports = generateMarkdown;