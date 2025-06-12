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
});