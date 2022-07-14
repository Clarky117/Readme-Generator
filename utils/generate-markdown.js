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

Project is covered under this license: ${license}
  
## Contributing

${contributing}
  
## Tests

${tests}
  
## Contact

If you have any questions about this project, please don't hesitate to contant me at: ${email}
  
You can also visit my github profile here: [${github}](https://github.com/${github})
`;
}

// export was part of starter code kept
module.exports = generateMarkdown;