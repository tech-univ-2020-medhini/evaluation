const roll = require('./roll.js');

describe('The rolling function', () => {
	it ('Should return an array', () => {
		const result = roll();
		expect(result).toBeInstanceOf(Array);
	});
});