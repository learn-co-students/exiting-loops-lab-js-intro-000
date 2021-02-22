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
  if (array[i] !== skipValue) {
  	continue
  }
    array[i] = changeValue
 }
  return array 
}

function findBy(array, findFn) {
	//match return value of function to value in array element (iterate over whole array) 
}

//expects return value of findBy to equal the search value 