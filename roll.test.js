const roll = require('./roll.js');

describe('The rolling function', () => {
	it ('Should return an array', () => {
		const result = roll(0);
		expect(result).toBeInstanceOf(Array);
	});
	it('Should return an array which represents the throws of the player at the end of the game', () => {
		roll(0);
		roll(0);
		roll(0);
		roll(0);
		roll(0);
		roll(0);
		roll(0);
		roll(0);
		roll(0);
		roll(0);
		roll(0);
		roll(0);
		roll(0);
		roll(0);
		roll(0);
		roll(0);
		roll(0);
		roll(10);
		roll(10);
		const result = roll(10);
		expect(result).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]);
	});
});