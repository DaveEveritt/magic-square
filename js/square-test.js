"use strict";

(function(){
  // 1. Is it the right number of integers for an n x n matrix?
  
  let dataString = "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16";
  console.log(dataString);

  // 1. split string into an array of numbers
  let dataArray = dataString.split(' ').map(Number);
  // mathematical operations on an array element confirms they're numbers
  console.log( `TEST: are they numbers: ${dataArray[0] + 1}` );

  // 2. remove duplicates and get length
  let dataArrayUndup = [...new Set(dataArray)];
  console.log( `TEST: array unique length: ${dataArrayUndup.length}` );

  // 3. Is this an n x n (square) array
  // TEST true if square root of length is an integer
  let order = Math.sqrt(dataArrayUndup.length);
  console.log(`Square root of array: ${order}`);
  let isInteger = (dataArrayUndup.length % order == 0);
  console.log( `TEST: this an n x n (square) array: ${isInteger}` );

})();