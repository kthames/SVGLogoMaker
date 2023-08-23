const Triangle = require('../triangle.js');

describe('Triangle', () => {
    test('should render with text, text color and shape color', () => {
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,10 25,150 275,150" fill="black"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">SVG</text></svg>`
        const triangle = new Triangle("SVG", "green", "circle", "black");
        expect(triangle.render()).toEqual(expectedSVG);
    });
});