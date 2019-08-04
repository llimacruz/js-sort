const makeArray = require('./makeArray.js');

const originalArray = makeArray(100000);
const newArray = [];

const startTime = new Date();

originalArray.forEach(item => {
  if (newArray.length > 0) {
    let found = false;
    let ind = 0;
    while (!found && ind < newArray.length) {
      if (newArray[ind] >= item) {
        newArray.splice(ind, 0, item);
        found = true;
      } else {
        ind++;
      }
    }
    if (!found) {
      newArray.push(item);
    }
  } else {
    newArray.push(item);
  }
})

//console.log('old', originalArray)
//console.log('new', newArray)
const finalTime = new Date();
console.log(finalTime - startTime)