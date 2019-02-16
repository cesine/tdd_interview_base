/*
Given an array of integers, return a new array of integers of the same size
where each number in the array is replaced with the product of all numbers in the array except itself.

For example: given the lists [1,2,3,4], the function should return [2*3*4, 1*3*4, 1*2*4, 1*2*3] -> [24, 12, 8, 6].
*/

function arrayMultiplier(input_array) {
  console.log(input_array);
  return_arr = [];
  temp_int = 1;
    for (i = 0; i < input_array.length; i++){
      for (j = 0; j < input_array.length; j++){
        console.log(i, j)
        if (j != i){
          temp_int *= j;
        }
    }
    return_arr.push(temp_int);
    temp_int = 1;
  }
  console.log(return_arr);
}

module.exports = arrayMultiplier;
