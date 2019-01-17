// 3 - Write a function that return a array of number that multiply all except itself.
// For example: given the lists [1,2,3,4], the function should return [2*3*4, 1*3*4, 1*2*4, 1*2*3] -> [24, 12, 8, 6].
function multiplyAll (numbers) {
  const left = [];
  for (let i = 0; i < numbers.length; i ++) {
    left[i] = numbers.slice(i + 1);
  }
  console.log('left', left);

  const right = [];
  for (let i = numbers.length -1; i >= 0; i --) {
    right[i] = numbers.slice(0, i);
  }
  console.log('right', right);

  const product = [];
  numbers.forEach((element, i) => {
    product[i] = left[i].concat(right[i]).reduce((a,b) => a * b);
  });
  return product;
}

module.exports = {
  multiplyAll
};
