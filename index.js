function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i ++) {
    if (array[i] === stopValue) {
      break;
    } else  {
      array[i] = changeValue;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i ++) {
    if (array[i] === skipValue) {
      continue;
    }
    array[i] = changeValue;
  }
  return array;
}

function findBy(array, findFn) {

  for (var i = 0; i < array.length; i ++) {

      if (findFn(array[i])) {
        return array[i];
      }
  }
  return null;
}
//
// expect(findBy([1, 1, 1, 1, c, 1, 2], n => n === c)).toEqual(c)
// })
//
// it('returns `null` if no match found', function() {
// expect(findBy(["dog", "cat", "cow"], a => a === "moose")).toEqual(null)
// })
