function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}


function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue;
    } else {
      array[i] = changeValue;
    }
  }
  return array;
}


function findBy(array, findFn) {
  let returnVal = null;

  for (let i = 0; i < array.length; i++) {
    let val = array[i];
    if (findFn(val)) {
      return val;
    }
  }
  return null;
}

function testFxn1(a) {
  return a === c ? a : null;
}
const c = Math.floor(Math.random() * 100);
console.log(findBy([1, 1, 1, 1, c, 1, 2], testFxn1));

function testFxn2(a) {
  return a === "moose" ? a : null;
}
console.log(findBy(["dog", "cat", "cow"], testFxn2));
