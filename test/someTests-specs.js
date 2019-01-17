const expect = require('expect.js');
const {
  multiplyAll
} = require('../src/problems');

describe('Fun challenges', () => {
  it('Test Mocha: ', () => {
    expect(true).to.be(true);
    expect(true).to.not.be(false);
    expect([1, 2, 3]).to.eql([1, 2, 3]);
  });

  it('should return [24, 12, 8, 6]', () => {
    const result = multiplyAll([1, 2, 3, 4]);
    expect(result).to.eql([24, 12, 8, 6]);
  });

  it('should support arbitrary numbers', () => {
    const result = multiplyAll([9, 22, 13, 8, 1, 3]);
    expect(result).to.eql([6864, 2808, 4752, 7722, 61776, 20592]);
  });

  it('should support non-unique numbers', () => {
    const result = multiplyAll([2, 2, 2, 2, 3]);
    expect(result).to.eql([24, 24, 24, 24, 16]);
  });

  it('should support zero', () => {
    const result = multiplyAll([9, 22, 8, 1, 0]);
    expect(result).to.eql([0, 0, 0, 0, 1584]);
  });
});
