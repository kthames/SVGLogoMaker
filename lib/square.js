const Shapes = require('./shapes.js'); 

class Square extends Shapes  {
    
    constructor(text, textColor, shape, shapeColor){
        super(text, textColor, shape, shapeColor);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <rect x="60" y="25" width="175" height="200" fill="green"/> 
                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>    
                </svg>`
    }
}

module.exports = Square;