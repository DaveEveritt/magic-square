(function(){
  "use strict";

/* Removes non-integers and checks for an n x n matrix */

  // let dataString = "1 2 3 4 4.5 'hello' 6 7 8 9 11 12 13 -14 15 16";
  let dataString = "1 2 3 4 4.5 'hello' 5 6 7 8 9 10 11 12 13 -14 15 16";
  // let dataString = "18 23 25 31 4 10 17 24 32 26 9 3 8 1 21 15 36 30 7 2 22 16 35 29 34 28 5 11 13 20 27 33 6 12 14 19";
  let outputToPrint = `<dl><dt>Original string:</dt><dd>${dataString}</dd>`

  // Makes array of numbers from space-separated string:
  let dataArray = dataString.split(' ').map(Number);

  // Removes non-numbers:
  dataArray = [...new Set(dataArray.filter(Boolean))]
  outputToPrint += `<dt>Must contain only numbers:</dt><dd>${dataArray.map(num => num +0)}</dd>`;


/* 1. remove floats and negative numbers */
  // removes floats:
  dataArray = dataArray.map(Math.floor);
  // TODO: delete floats instead of math.floor

  // removes negative numbers:
  dataArray = dataArray.map(Math.abs);
  outputToPrint += `<dt>Must contain no floats or negative numbers:<dt><dd>${dataArray}</dd>`;
  // TODO: option to retain negatives for balanced squares e.g. 1, -1, 2, -2 etc.


/* 2. removes duplicates and gets length */
  let dataArrayUndup = [...new Set(dataArray)];
  outputToPrint += `<dt>Must contain no dupicated numbers:<dt><dd>${dataArrayUndup}</dd></dl>`;


/* 3. check for an n x n (square) array */
  // TEST true if square root of length is an integer
  let order = Math.sqrt(dataArrayUndup.length);
  let isInteger = (dataArrayUndup.length % order == 0);
  // return true or false here
  outputToPrint += `<dt>Summary:<dt><dd><ul><li>Square root of array length is: <strong>${dataArrayUndup.length}</strong></li><li>Square root of array length is an integer (<strong>${isInteger}</strong>).</li><li>This is a square array of integers (<strong>${isInteger}</strong>) with dimension <strong>${order} x ${order}</strong></li><ul></dd></dl>`;


  printOutput(outputToPrint);

})();