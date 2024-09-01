const sum = require("./sum");
const multiply = require("./multiplication");
const subtract = require("./subtraction");
const divide = require("./division");

let a = 10;
let b = 5;

try {
    let sumResult = sum(a, b);
    console.log(`Sum: ${sumResult}`);

    let multiplyResult = multiply(a, b);
    console.log(`Multiplication: ${multiplyResult}`);

    let subtractResult = subtract(a, b);
    console.log(`Subtraction: ${subtractResult}`);

    let divideResult = divide(a, b);
    console.log(`Division: ${divideResult}`);
} catch (error) {
    console.error(`Error: ${error.message}`);
}
