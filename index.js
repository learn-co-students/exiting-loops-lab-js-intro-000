var numbers = []
var changeValue = 3
var stopValue = null

function breakOut(array, changeValue, stopValue) {
  
  for (let i = 0; i < array.length; i++)
  {
    array[i] = changeValue;
  }
  if (array[i] == 10) {
    stopValue = array[i]
    break;
  }
  return array;
}


