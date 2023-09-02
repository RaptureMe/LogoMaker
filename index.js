const inquirer = require('inquirer');
const Text = require('./classes/Text');
const {Circle, Triangle, Square} = require('./classes/Shape');
const Svg = require('./classes/Svg');
const fs = require('fs')

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
    // console.log(new Text(data.logoCharacters, data.textColor).render())
    const userText = new Text(data.logoCharacters,data.textColor)
    let userShape;
    switch(data.shape){
        case 'Circle':
            userShape = new Circle(data.shapeColor);
            break;
        case 'Square':
            userShape = new Square(data.shapeColor);
            break;
        case 'Triangle':
            userShape = new Triangle(data.shapeColor);
            break;
    };
    const svgGen = new Svg(userText.render(),userShape.render())
    
    // console.log(svgGen)
    // console.log(svgGen.render())
    fs.writeFile('logo.svg', svgGen.render(), (err) =>
      err ? console.log(err) : console.log('Generated logo.svg')
    );
  });