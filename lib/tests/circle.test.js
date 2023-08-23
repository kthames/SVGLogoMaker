const Circle = require('../circle.js');

describe('Circle', () => {
    test('should render with text, text color and shape color', () => {
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="white"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">SVG</text></svg>`
        const circle = new Circle("SVG", "green", "circle", "white");
        expect(circle.render()).toEqual(expectedSVG);
    });
});

// const circle = new Circle("SVG", "green", "circle", "white");

// console.log(circle.render());