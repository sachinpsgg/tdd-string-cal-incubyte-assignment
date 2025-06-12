function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    let delimiter = ',';
    if (numbers.startsWith('//')) {
        const parts = numbers.split('\n');
        delimiter = parts[0].slice(2);
        numbers = parts[1];
    }

    const numArray = numbers.split(new RegExp(`[\\n${delimiter}]`)).map(Number);
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
    }
    return numArray.reduce((sum, num) => sum + num, 0);
}
module.exports = add;