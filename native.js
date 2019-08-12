const makeArray = require('./makeArray.js');

const originalArray = makeArray(100000);
const startTime = new Date();
orderedArray = originalArray.sort();
const finalTime = new Date();
console.log(finalTime - startTime)

//console.log('old', originalArray)
//console.log('new', newArray)