let arr = [1, 3, 5];
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
    // debugger;
    if (findFn(array[i])) {
      return array[i];
    }
  }
}
const c = Math.floor(Math.random() * 100);
findBy([1, 1, 1, 1, c, 1, 2], (element) => element === c);
findBy(["dog", "cat", "cow"], (element) => element === "moose");
