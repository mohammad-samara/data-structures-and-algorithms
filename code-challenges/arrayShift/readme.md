# Reverse an Array

## Summary

We must take an array and add a value to it at the middle index without using any built in functions of Javascript.

## Challenge

Write a function called `insertShiftArray` which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Approach & Efficiency

* First i defined the length of the array then divided it by 2 to get the value of the middle index, then I created a new empty array.
* I made a for loop that goes through the array till its midway, adding the values from the original array.
* I added the new number value to the new array.
* Used a new for loop to add the remaining values from the original array to the new array then return the new array.

## Solution

![white boarding](./assets/array-shift.jpg)
