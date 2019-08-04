const makeArray = require('./makeArray.js');

const sort = originalArray => {
  const newArray = [];
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
  return newArray;
}


const originalArray = makeArray(100000);
const startTime = new Date();
orderedArray = sort(originalArray);
const finalTime = new Date();
console.log(finalTime - startTime)

//console.log('old', originalArray)
//console.log('new', newArray)