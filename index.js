function breakOut(array, changeValue, stopValue) {
for (var i = 0; i < array.length; i++) {
if (array[i] == stopValue) {
break;
} else { array[i] = changeValue
}
} return array
}

function keepGoing(array, changeValue, skipValue) {
for (var i = 0; i < array.length; i++) {
  if (array[i] == skipValue) {

  } else {
    array[i] = changeValue;
  }
}
return array
}

function findBy(array, findFn) {

if (array.find(findFn) == undefined) {
  return null
} else {
  return array.find(findFn)
}
}
