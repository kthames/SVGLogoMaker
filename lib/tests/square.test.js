const Square = require('../square.js');

describe('Square', () => {
    test('should render with text, text color and shape color', () => {
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="25" width="175" height="200" fill="black"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">SVG</text></svg>`
        const square = new Square("SVG", "green", "circle", "black");
        expect(square.render()).toEqual(expectedSVG);
    });
});