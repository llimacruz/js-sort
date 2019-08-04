const makeArray = require('./makeArray.js');

const quickSort = (list, init, final) => {
  let i = init
  let j = final
  let pivot = list[parseInt((i + j) / 2)]

  //console.log('pivot', pivot)
  
  while (i < j) {
    while (list[i] < pivot) {
      i++
    }
    while (list[j] > pivot) {
      j--
    }
    if (i < j) {
      //console.log('trocando', list[i], list[j])
      changes++
      const aux = list[i]
      list[i] = list[j]
      list[j] = aux
      //console.log(list)
      i++
      j--
    } else if (i == j) {
      //console.log('iguais', list[i], list[j])
      i++
      j--
    }
  }
  if (init < j) {
    quickSort(list, init, j)
  }
  if (i < final) {
    quickSort(list, i, final)
  }
}

const list = makeArray(100000);
  
let i = 0
let j = list.length - 1
let changes = 0

const startTime = new Date();
quickSort(list, i, j)
const finalTime = new Date();
console.log(finalTime - startTime)
//console.log(list)
//console.log('changes: ', changes)