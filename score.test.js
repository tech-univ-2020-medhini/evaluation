const score = require('./score.js');

describe('The scoring function', () => {
	it ('Should return a number', () => {
		const result = score();
		expect(typeof result).toBe('number');
	});
	it('Should return the sum of the array when there are no strikes or spares', () => {
		let result = score([6, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
		expect(result).toBe(12);
		result = score([6, 3, 3, 5, 2, 4, 7, 0, 5, 1, 2, 2, 0, 1, 0, 0, 2, 3, 1, 4]);
		expect(result).toBe(51);
		result = score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]);
		expect(result).toBe(90);
	});
	it('Should add the points of an extra throw in case of a spare', () => {
		let result = score([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
		expect(result).toBe(16);
		result = score([6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6]);
		expect(result).toBe(160);
	});
	it('Should add the points of two extra throws in case of a strike', () => {
		let result = score([ 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
		expect(result).toBe(60);
		result = score([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
		expect(result).toBe(300);
	});
	it('Should stop adding points after 10 turns', () => {
		let result = score([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]);
		expect(result).toBe(30);
		result = score([6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 10, 6, 4]);
		expect(result).toBe(168);
	});
});