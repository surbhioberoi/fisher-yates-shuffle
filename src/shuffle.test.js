var expect = require('chai').expect;
var shuffle = require('./shuffle').shuffle;

describe('shuffle-numbers', function() {
	it('It should shuffle the array of numbers', function() {
		var testArray = [1,2,3,4,5,6];
		expect(shuffle(testArray)).to.not.deep.equal([1,2,3,4,5,6]);
	});
});

