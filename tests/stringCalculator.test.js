const add = require('../src/stringCalculator');

describe('add function', () => {
    it('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });
});