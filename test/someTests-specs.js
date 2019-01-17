const expect = require('expect.js');
const { getProductsExceptItselfMaxTime } = require('../src/problems');

describe('Fun challenges', () => {

  it('should test expectations', () => {
    expect(true).to.be(true);
    expect(true).to.not.be(false);
    expect([1, 2, 3]).to.eql([1, 2, 3]);
  });

  it('should return an empty array when an empty input is given', () => {
    let input = []
    let products = getProductsExceptItselfMaxTime(input)
    expect(products).to.eql([])
  })
  it('should return [1] when given a single value array', () => {
    let input = [2]
    let products = getProductsExceptItselfMaxTime(input)
    expect(products).to.eql([1])

  })
  it('should return an array of products when called multiple times', () =>{
    let input = [1,2,3,4]
    let input2 = [1,2,3,4]
    let products = getProductsExceptItselfMaxTime(input)
    expect(products).to.eql([24, 12, 8, 6])
    expect(getProductsExceptItselfMaxTime(input2)).to.eql([24, 12, 8, 6])

  })

});
