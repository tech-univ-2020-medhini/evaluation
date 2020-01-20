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
	it('Should add the points of an extra throw in case of a spare', () => {
		const result = score([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
		expect(result).toBe(16);
	});
	it('Should add the points of two extra throws in case of a strike', () => {
		const result = score([ 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
		expect(result).toBe(60);
	});
	it('Should stop adding points after 10 throws', () => {
		const result = score([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]);
		expect(result).toBe(30);
	});
});