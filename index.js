function breakOut(array, changeValue, stopValue) {
 for (let i = 0; i < array.length; i++) {
          //array.push(array[i])
  if (array[i] == stopValue) {
     break
  }
    array[i] = changeValue
 }
  return array 
}


function keepGoing(array, changeValue, skipValue) {
 for (let i = 0; i < array.length; i++) {
          //array.push(array[i])
  if (array[i] == skipValue) {
  	continue  //don't necessarily need continue if you use !== above 
  }
    array[i] = changeValue
 }
  return array 
}

function findBy(array, findFn) {
	for (let i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
  }
  return null 
}

//expects return value of findBy to equal the search value 