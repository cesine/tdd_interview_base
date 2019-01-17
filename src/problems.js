/*
Given an array of integers, return a new array of integers of the same size
where each number in the array is replaced with the product of all numbers in the array except itself.

For example: given the lists [1,2,3,4], the function should return [2*3*4, 1*3*4, 1*2*4, 1*2*3] -> [24, 12, 8, 6].
[2]
*/

// [24, 12, 4, 1] <- all products to the right
// [1,1,2,6] <- all products to the left
//
//

function getProductsExceptItselfMaxTime(input){
  const out = []
  const allRightProducts = [1]
  const allLeftProducts = [1]
  let product = 1
  for(let i=input.length-2; i>=0; i--){
    product *= input[i]
    allRightProducts.push(product)
  }
  console.log('All Right: ', allRightProducts)

  product = 1
  for(let i=1; i<input.length; i++){
    product*= input[i]
    allLeftProducts.push(product)
  }
  console.log('All Left: ', allLeftProducts)

}

//
function getProductsExceptItself(input) {
  // iterate through the input
  //  iterate through again
  //    multiply by every value that isnt the current input
  //
  const out = []

  for(let i=0; i<input.length; i++){
    let product = 1
    for(let j=0; j<input.length; j++){
      if(j!==i){
        product *= input[j]
      }
    }
    out.push(product)
  }

  return out
}

function getProductsExceptItselfMap(input) {
  return input.map((_, idx) => {
    let product = 1

    input.forEach((val, idx2) =>{
      if(idx!== idx2){
        product *= val
      }
    })

    return product
  })
}


module.exports = {
  getProductsExceptItself: getProductsExceptItself,
  getProductsExceptItselfMap: getProductsExceptItselfMap,
  getProductsExceptItselfMaxTime: getProductsExceptItselfMaxTime
};
