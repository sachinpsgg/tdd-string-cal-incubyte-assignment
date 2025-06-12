function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    let delimiters = [','];
    if (numbers.startsWith('//')) {
        const parts = numbers.split('\n');
        const delimiterPart = parts[0].slice(2);
        delimiters = delimiterPart.split(/\]\[|\[/).map(d => d.replace(/\[|\]/g, ''));
        numbers = parts[1];
    }

    const regex = new RegExp(`[\\n${delimiters.join('')}]`);
    const numArray = numbers.split(regex).map(Number);
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
    }
    return numArray.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
}
module.exports = add;