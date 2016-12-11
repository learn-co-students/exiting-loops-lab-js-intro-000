// var numbers = [1,2,3,4,5,6,7,8];

function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break;
    }
  array[i] = changeValue;
  }
  return array;
}
function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue;
    }
  array[i] = changeValue;
  }
  return array;
}

function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i];
    }
  }
  return null;
}

// findBy(numbers, 4);
// console.log(numbers);



//   3) loops findBy(array, findFn) finds the a value that satisfies `findFn`:
//      ReferenceError: findBy is not defined
//       at Context.<anonymous> (test/index-test.js:25:14)
//
//   4) loops findBy(array, findFn) returns `null` if no match found:
//      ReferenceError: findBy is not defined
//       at Context.<anonymous> (test/index-test.js:29:14)
//
//
