/*
Given an array of integers, return a new array of integers of the same size
where each number in the array is replaced with the product of all numbers in the array except itself.

For example: given the lists [1,2,3,4], the function should return [2*3*4, 1*3*4, 1*2*4, 1*2*3] -> [24, 12, 8, 6].
*/

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    static int yourMethod(int a, int b) {
        System.out.println(a+b);
        System.out.print(a*b);
        return a * b;
    }

    public static void main(String[] args) {
        assert yourMethod(1, 2) == 2 : "should equal 2";
        System.out.print("It passes.");
    }
}
