// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}





// TODO: Create a function to generate markdown for README
function generateMarkdown({
  title,
  license,
  description,
  installation,
  usage,
  contributing,
  tests,
  github,
  email
}) {

  return `

# ${title}

![${license}](https://img.shields.io/badge/license-${license}-blue)
  
## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Contact](#contact)
  
## Description

${description}
  
## Installation

${installation}
  
## Usage

${usage}
  
## License

${license}
  
## Contributing

${contributing}
  
## Tests

${tests}
  
## Contact
  
Visit my github repository here: [${github}](https://github.com/${github})
  
Email me here: ${email}

`;
}

module.exports = generateMarkdown;
