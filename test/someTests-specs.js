const expect = require('expect.js');
const productOfAll = require('./../src/problems.js')

// console.log(productOfAll);

describe('Fun challenges', () => {

  it('should test expectations', () => {
    const res = productOfAll(1);
    const res2 = productOfAll([1,2,3])
    const res3 = productOfAll([2, 3, 4])
    expect([]).to.eql([]);
    expect(res2).to.eql([6, 3, 2]);
    expect(res3).to.eql([12, 8, 6]);
    expect(productOfAll([1])).to.eql([1]);
    expect(productOfAll([2,2])).to.eql([2,2]);
    expect(productOfAll([2,3,4,5])).to.eql([60,40,30,24]);
  });

});
