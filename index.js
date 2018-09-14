function breakOut(array, changeValue, stopValue){

  //iterates through
  for (let i = 0; i < array.length; i++) {

    //the loop reaches stopValue - then we break out of the loop
    if (array[i] === stopValue) {break}

    // otherwise changes every element to changeValue
    array[i] = changeValue
    }

return array
}


function keepGoing(array, changeValue, skipValue) {

  //iterates though array
  for (let i = 0; i < array.length; i++) {

    //except those that match skipValue
    if (array[i] === skipValue) {continue}

    //changes every element to changeValue
    array[i] = changeValue
  }

return array
}


function findBy(array, findFn) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
  }

  return null
}
