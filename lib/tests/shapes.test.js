const Shapes = require("../shapes.js");

let text = "ABC"; 
let textColor = "white";
let shape = "circle";
let shapeColor = "green";

const newShape = new Shapes(text, textColor, shape, shapeColor);

test("Testing text in Shape", () => expect(newShape.text).toBe(text));
test("Testing text in Shape", () => expect(newShape.textColor).toBe(textColor));
