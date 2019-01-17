const expect = require('expect.js');
const problems = require('../src/problems.js');

describe('Coding challenge - product of list ignores current index', () => {
  it('should work when a list passed as the arg', () => {
    var testList = [1,2,3,4];
    expect(problems.productOfNotTheIndex(testList)).to.be.eql([24, 12, 8, 6])
  });

  // TODO test 0 in array

  it('should fail when a non-list passed as the arg', () => {
    var testList = "not list";
    //expect(problem.productOfNotTheIndex(testList)).to.be([24, 12, 8, 6])
  });

});
