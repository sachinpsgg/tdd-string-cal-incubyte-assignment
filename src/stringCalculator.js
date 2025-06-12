function add(numbers) {
    if (!numbers) return 0;

    const { delimiters, numberString } = parseDelimiters(numbers);
    const numArray = extractNumbers(numberString, delimiters);
    validateNegatives(numArray);

    return sumNumbers(numArray);
}

function parseDelimiters(numbers) {
    const defaultDelimiters = [','];
    if (!numbers.startsWith('//')) {
        return { delimiters: defaultDelimiters, numberString: numbers };
    }

    const [delimiterPart, ...numberParts] = numbers.split('\n');
    const delimiterRegex = /\[(.*?)\]/g;
    const delimiters = [];
    let match;

    while ((match = delimiterRegex.exec(delimiterPart)) !== null) {
        delimiters.push(match[1]);
    }

    const numberString = numberParts.join('\n');
    if (delimiters.length === 0) {
        delimiters.push(';');
    }
    return {
        delimiters: delimiters.length ? delimiters : defaultDelimiters,
        numberString
    };
}

function extractNumbers(numberString, delimiters) {
    const regex = new RegExp(`[\\n${delimiters.join('')}]`);
    return numberString.split(regex).map(Number);
}

function validateNegatives(numbers) {
    const negatives = numbers.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
    }
}

function sumNumbers(numbers) {
    return numbers.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
}

module.exports = add;