/*
Given an array of integers, return a new array of integers of the same size
where each number in the array is replaced with the product of all numbers in the array except itself.
For example: given the lists [1,2,3,4], the function should return [2*3*4, 1*3*4, 1*2*4, 1*2*3] -> [24, 12, 8, 6].
*/
var example = [1, 2, 3, 4];
var myProduct = function(myArr) {
    var myArrLength = myArr.length;
    var newArr = new Array()
    /*for (var i=0; i<(myArrLength-1); i++){
        newArr[i]=myArr[i];
    }
    console.log('First', newArr);
    */

    for (var i=0; i<myArrLength; i++){
        for(var j=0; j<(myArrLength-i-1); j++){
            console.log('i', i, 'j' , j);
            newArr[j]=myArr[j];
            console.log('each: ', newArr);
        }
        console.log('');
    }
    return newArr;
}
var result = myProduct(example);
console.log('result is ', result);
//1 2 3 4
// i 0 j 0
// each: [1]
// i 0 j 1
// each: [1, 2]
