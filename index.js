const inquirer = require('inquirer');
const Text = require('./classes/Text');
const {Circle, Triangle, Square} = require('./classes/Shape');
const Svg = require('./classes/Svg');

inquirer.prompt([
    {
        type: 'input',
        message: '3 Characters for logo:',
        name: 'logoCharacters',
      },
    {
      type: 'list',
      message: 'What Shape would you like:',
      name: 'shape',
      choices: ['Circle', 'Square', 'Triangle'],
    },
    {
      type: 'input',
      message: 'What color would you like:',
      name: 'shapeColor',
    },
    {
      type: 'input',
      message: 'What text color would you like:',
      name: 'textColor',
    },
    //Takes the data and writes into README.md
  ]).then((data) => {
    console.log(new Text(data.logoCharacters, data.textColor).render())
    // fs.writeFile('README.md', generateReadme(data), (err) =>
    //   err ? console.log(err) : console.log('Generated logo.svg')
    // );
  });