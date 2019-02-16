/*
Given an array of integers, return a new array of integers of the same size
where each number in the array is replaced with the product of all numbers in the array except itself.

For example: given the lists [1,2,3,4], the function should return [2*3*4, 1*3*4, 1*2*4, 1*2*3] -> [24, 12, 8, 6].
*/

#include <assert.h>
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int myFunction(int a, int b) {
  return a+b;
}
int main() {
  int num1, num2;
  int product;

  num1 = 1;
  num2 = 2;

  product = num1 * num2;

  int expected = 3;

  printf ("%d should equal %d\n", product, expected);
  assert (product == expected);

  printf ("It Passes.");
  return 0;
}
