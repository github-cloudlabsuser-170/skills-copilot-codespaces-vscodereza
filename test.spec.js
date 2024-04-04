// FILEPATH: /workspaces/skills-copilot-codespaces-vscodereza/test.js
const Calculator = require('./Calculator'); // Assuming Calculator is in Calculator.js

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('add() should return the sum of two numbers', () => {
        expect(calculator.add(1, 2)).toBe(3);
        expect(calculator.add(-1, 2)).toBe(1);
        expect(calculator.add(1.5, 2.5)).toBe(4);
    });

    test('subtract() should return the difference of two numbers', () => {
        expect(calculator.subtract(2, 1)).toBe(1);
        expect(calculator.subtract(-1, 2)).toBe(-3);
        expect(calculator.subtract(2.5, 1.5)).toBe(1);
    });

    test('multiply() should return the product of two numbers', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
        expect(calculator.multiply(-1, 2)).toBe(-2);
        expect(calculator.multiply(1.5, 2.5)).toBe(3.75);
    });

    test('divide() should return the division of two numbers', () => {
        expect(calculator.divide(6, 3)).toBe(2);
        expect(calculator.divide(-4, 2)).toBe(-2);
        expect(calculator.divide(3.75, 1.5)).toBe(2.5);
    });

    test('divide() should throw an error when dividing by zero', () => {
        expect(() => calculator.divide(1, 0)).toThrow("Cannot divide by zero");
    });
});