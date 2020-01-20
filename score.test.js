const score = require('./score.js');

describe('The scoring function', () => {
	it ('Should return a number', () => {
		const result = score();
		expect(typeof result).toBe('number');
	});
});