const score = require('./score.js');

describe('The scoring function', () => {
	it ('Should return a number', () => {
		const result = score();
		expect(typeof result).toBe('number');
	});
	it('Should return the sum of the array when there are no strikes or spares', () => {
		const result = score([6, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
		expect(result).toBe(12);
	});
});