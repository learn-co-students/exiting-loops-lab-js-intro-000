function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
    console.log(i, stopValue);
    if(i === 4) {
      break;
    }
    array[i] = changeValue;
  }
  return array;
};

function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue;
    }
    array[i] = changeValue;
  }
  return array;
};
