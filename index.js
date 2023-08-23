const inquirer = require('inquirer');
const fs = require('fs');

const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const Square = require('./lib/square');

inquirer 
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter the desired text: ',
            default: "ABC", 
            validate: text => text.length < 4 || "Text length needs to be 3 or less."
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the desired text color (as a keyword or hexadecimal): ',
            default: "green"
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select the desired shape:',
            choices: ['circle', 'triangle', 'square'],
            default: "circle"
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the desired shape color (as a keyword or hexadecimal): ',
            default: "black"
        },
    ])
    .then(({text, textColor, shape, shapeColor}) => {
        
        //console.log(text, textColor, shape, shapeColor);
        
        let shapeRender = " ";
        let newShape = " ";

        if(shape === 'circle'){
            newShape = new Circle(text, textColor, shape, shapeColor);
            console.log(newShape);
            shapeRender = newShape.render();
        }
        if(shape === 'triangle'){
            newShape = new Triangle(text, textColor, shape, shapeColor);
            console.log(newShape);
            shapeRender = newShape.render();
        }
        if(shape === 'square'){
            const newShape = new Square(text, textColor, shape, shapeColor);
            console.log(newShape);
            shapeRender = newShape.render();
        }

        fs.writeFile(`./examples/${shape}.svg`, shapeRender, (err) =>
        err ? console.error(err) : console.log('Success!'));

    });