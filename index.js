// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name:'title',
    message: 'What is the awesome name for this project?',
    },
    {
    type: 'input',
    name: 'description',
    message:'What is your project about? give us a short description',
    },
    {
    type: 'input',
    name: 'install',
    message:'Is an install needed? or how do you install',
    }, 
    {
    type: 'input',
    name: 'usage',
    message:'Example/ usage of this app/build ',
    },
    {
    type: 'input',
    name: 'testts',
    message:'What tests have been performed?',
    },
    {
    type: 'input',
    name: 'credits',
    message:'Who worked on this cool project?',
    },
    {
    type: 'input',
    name: 'licenses',
    message:'What License did you use?',
    },
    {
    type:'input',
    name:'question',
    message:'Do you have any questions?',
    },
    {
     type:'input',
    name:'linkedin',
    message:'What is your linkedin?',
    },
    {
    type:'input',
    name:'github',
    message:'Link your github',
    },
    {
    type:'input',
    name:'email',
    message:'What is your email?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data)),(err) => err ? console.log(err) : 
    console.log('You just  created an awesome readme.md!')
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createprompt(questions).then((data)=> writeToFile('readme.md',data))
}

// Function call to initialize app
init();
