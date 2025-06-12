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
});