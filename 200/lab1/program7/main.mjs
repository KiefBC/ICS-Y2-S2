import GoblinCalculator from './index.mjs';

const args = process.argv.slice(2);

if (args.length !== 3) {
    console.log("Usage: node main.mjs <number1> <operator> <number2>");
    process.exit(1);
}

const num1 = parseFloat(args[0]);
const operator = args[1];
const num2 = parseFloat(args[2]);

if (isNaN(num1) || isNaN(num2)) {
    console.log("Please provide valid numbers.");
    console.log("Usage: node main.mjs <number1> <operator> <number2>");
    process.exit(1);
}

const goblinMath = new GoblinCalculator();

switch (operator) {
    case '+': goblinMath.add(num1, num2); break;
    case '-': goblinMath.subtract(num1, num2); break;
    case '*': goblinMath.multiply(num1, num2); break;
    case '/': goblinMath.divide(num1, num2); break;
    default:
        console.log("Valid operators are: +, -, *, /");
        process.exit(1);
}