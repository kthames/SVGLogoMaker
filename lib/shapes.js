class Shapes {
    constructor(text, colorText, shape, colorShape) {
        
        if (text.length > 3) {
            throw new Error('`text` cannot contain more than 3 characters.');
        }
        //add if for color keyword and hexadecimal

        this.text = text;
        this.colorText = colorText;
        this.shape = shape;
        this.colorShape = colorShape;
    } 
}

module.exports = Shapes;