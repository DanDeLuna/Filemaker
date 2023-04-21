// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
    name: 'test',
    message:'What tests have been performed?',
    },
    {
    type: 'input',
    name: 'credits',
    message:'Who worked on this cool project?',
    },
    {
    type: 'input',
    name: 'license',
    message:'',
    },
    {
    type:'input',
    name:'question',
    message:'',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
