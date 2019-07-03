function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== stopValue) {
      array[i] = changeValue
    } else { 
      break}
  }
return array
}



function keepGoing(array, changeValue, skipValue) {
    for (let i = 0; i < array.length; i++) {
    if (array[i] !== skipValue) {
    array[i] = changeValue
}
}
  return array
}


function findFn() {
  return 5
}

var array2 = [1, 2, 3, 4, 5]

function findFn() {
  return 5
}




// function findBy(array, findFn) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == findFn()) {
//       return array[i]
//     }
// }
// return null
// }

function findBy(array, findFn) {
  for (let i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
}
}


















