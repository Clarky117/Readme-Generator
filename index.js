// my imports
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generate-markdown');
const fs = require('fs/promises');
const path = require('path');

// Goal - Generate Markdown Generator to use for future projects

// Ask the user questions;
// Sections entitled;
inquirer.prompt([
    // What us the Title of Project?   
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },    
    // Add License badge under title of project
    // https://github.blog/2015-03-09-open-source-license-usage-on-github-com/
    {
        type: 'list',
        message: 'What is the license of your project?',
        name: 'license',
        choices: [
            'MIT', 'GPLv2', 'Apache', 'GPLv3', 'None',
        ]
    },
    // Auto include Table Of Contents with the below sections
    //  Description,
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    //  Table of Contents - fill this with each section
    //  Installation,
    {
        type: 'input',
        message: 'What are the installation instructions of your project?',
        name: 'installation',
    },
    //  Usage,
    {
        type: 'input',
        message: 'What is the usage information of your project?',
        name: 'usage',
    },
    //  License - fill this with the choice of license
    //  Contributing,
    {
        type: 'input',
        message: 'What are the contributing guidelines of your project?',
        name: 'contributing',
    },
    // Tests,
    {
        type: 'input',
        message: 'What are the testing instructions of your project?',
        name: 'tests',
    },
    //  and Questions - is contact info, ask Github and Email
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    // Once all questions are asked we want to generate readme in output folder with user responses
]).then((answers) => {
    // testing to make sure i receive my user data
    // console.log(answers);
    const markDown = generateMarkdown(answers);
    // testing to make sure it logs me a usable readme
    // console.log(markDown);

    const outputPath = path.join(__dirname, 'output', 'generated-markdown.md');
    fs.writeFile(outputPath, markDown, 'utf-8')
        .then(() => {
            console.log('Readme Successfully Generated');
        });
});