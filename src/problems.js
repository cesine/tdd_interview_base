/*
Given an array of integers, return a new array of integers of the same size
where each number in the array is replaced with the product of all numbers in the array except itself.
Do not use division and try to make the function as efficient as possible.
*/

// For example: given the lists [1,2,3,4], the function should return [2*3*4, 1*3*4, 1*2*4, 1*2*3] -> [24, 12, 8, 6].


function productOfNotTheIndex(list) {
 // if (!(list typeof "array")) {
 //   throw 'Error!'
 // }

  var listOfProducts = [];
  for (var i = 0; i < list.length; i++) {
    var product = 1;
    for (var j = 0; j < list.length; j++) {
      if (i == j) continue;
      product = product*list[j];
    }
    listOfProducts.push(product);

  }

  return listOfProducts;
}


module.exports = {
  productOfNotTheIndex: productOfNotTheIndex
};
