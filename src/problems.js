/*
Given an array of integers, return a new array of integers of the same size
where each number in the array is replaced with the product of all numbers in the array except itself.

For example: given the lists [1,2,3,4], the function should return [2*3*4, 1*3*4, 1*2*4, 1*2*3] -> [24, 12, 8, 6].
*/
// All numbers including decimals
// [1, 2, 3]

const productOfAll = (array) => {
  const results = [];
  // I will iterate through the array,
  for(let i = 0 ; i < array.length; i++){
    // We need rest of the elements to get the product
    // create a variable to store product
    // ignore i when i am multpling to the product
    let product = 1;
    for(let j = 0; j < array.length; j++){
      if(i !== j) {
         product *= array[j];
      }
    }
    results.push(product);
  }

  return results;
}

module.exports =  productOfAll;
