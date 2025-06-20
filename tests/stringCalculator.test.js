const add = require('../src/stringCalculator');

describe('add function', () => {
    // test 1
    it('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    //test 2
    it('should return number for single number', () => {
        expect(add("1")).toBe(1);
    });

    //test 3
    it('should return the sum for two numbers separated by a comma', () => {
        expect(add("1,2")).toBe(3);
    });

    //test 4
    it('should handle new lines between numbers', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    //test 5
    it('should support custom delimiters', () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    //test 6
    it('should throw an error for negative numbers', () => {
        expect(() => add("1,-2,3")).toThrow("negatives not allowed: -2");
    });

    //test 7
    it('should ignore numbers bigger than 1000', () => {
        expect(add("2,1001")).toBe(2);
    });

    //test 8
    it('should support multi-character delimiters', () => {
        expect(add("//[***]\n1***2***3")).toBe(6);
    });

    //test 9
    it('should support multiple delimiters of any length', () => {
        expect(add("//[***][%]\n1***2%3")).toBe(6);
    });
});