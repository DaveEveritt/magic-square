"use strict";

(function(){
  // Removes non-integers and checks for an n x n matrix?
  
  let dataString = "1 2 3 4 4.5 'hello' 5 6 7 8 9 10 11 12 13 -14 15 16";
  let outputToPrint = `<p>Original string:<br>${dataString}</p>`

  // Splits space-separated string into an array of numbers:
  let dataArray = dataString.split(' ').map(Number);

  // Removes non-numbers:
  dataArray = [...new Set(dataArray.filter(Boolean))]
  outputToPrint += `<p>Should contain only numbers:<br>${dataArray.map(num => num +0)}</p>`;

/* 1. remove floats and negative numbers */
  // removes floats:
  dataArray = dataArray.map(Math.floor);
  // TODO: delete floats instead of math.floor

  // removes negative numbers:
  dataArray = dataArray.map(Math.abs);

  outputToPrint += `<p>Should be no floats or negative numbers:<br>${dataArray}</p>`;
  // TODO: retain negatives for balanced squares e.g. 1, -1, 2, -2 etc.?
/* END 1 */


/* 2. remove duplicates and get length */
  let dataArrayUndup = [...new Set(dataArray)];
  outputToPrint += `<p>Should be no dupicated numbers:<br>${dataArrayUndup}</p>`;
/* END 2 */


/* 3. check for an n x n (square) array */
  // TEST true if square root of length is an integer
  let order = Math.sqrt(dataArrayUndup.length);
  let isInteger = (dataArrayUndup.length % order == 0);
  // return true pr false here
  outputToPrint += `<p>Square root of array length (${dataArrayUndup.length}) is: ${order}<br>If this is this an integer (${isInteger}) then this is a square (n x n) array: ${isInteger}</p>`;
/* END 3 */


  printOutput(outputToPrint);

})();