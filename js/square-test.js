"use strict";

(function(){
  // Check: the right number of integers for an n x n matrix?
  
  let dataString = "1 2 3 4.5 'hello' 5 6 7 8 9 10 11 12 13 -14 15 16";
  let outputToPrint = `<p>Original string:<br>${dataString}</p>`

  // splits space-separated string into an array of numbers:
  let dataArray = dataString.split(' ').map(Number);
  // removes non-numbers:
  dataArray = [...new Set(dataArray.filter(Boolean))]

/* 1. remove floats and negative numbers */
  // removes floats:
  dataArray = dataArray.map(Math.floor);
  // TODO: delete floats instead of math.floor
  
  // add 1 to all array elements to check for NaN
  outputToPrint += `<p>Test for non-numbers by adding zero to all elements:<br>${dataArray.map(num => num +0)}</p>`;

  // removes negative numbers:
  dataArray = dataArray.map(Math.abs);

  outputToPrint += `<p>Should be no negative numbers:<br>${dataArray}</p>`;
  // TODO: retain negatives for balanced squares e.g. 1, -1, 2, -2 etc.?
/* END 1 */


/* 2. remove duplicates and get length */
  let dataArrayUndup = [...new Set(dataArray)];
/* END 2 */


/* 3. check for an n x n (square) array */
  // TEST true if square root of length is an integer
  let order = Math.sqrt(dataArrayUndup.length);
  let isInteger = (dataArrayUndup.length % order == 0);
  // return true pr false here
  outputToPrint += `Square root of array length ${dataArrayUndup.length} is: ${order}<br>If this is this an integer (${isInteger}) then this is a square (n x n) array: ${isInteger}</p>`;
/* END 3 */


  printOutput(outputToPrint);

  // duplicates printOutput to console
  console.log(outputToPrint);
  // console.log( `TEST: adding +1 to elements proves they're numbers: ${dataArray.map(num => num +1)}\n\n` );
  // console.log( `TEST: noNegatives: ${dataArray}\n\n` );
  // console.log( `RETURN: array unique length: ${dataArrayUndup.length}\n\n` );
  // console.log( `RETURN: Square root of array: ${order}` );
  // console.log( `RETURN: this an n x n (square) array: ${isInteger}` );

})();