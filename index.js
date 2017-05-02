function breakOut(array, changeValue, stopValue) { // create function that
	for (var i = 0; i < array.length; i++) {  // iterates through array
		if (array[i] === stopValue) { // if loop reaches stopValue
			break; // break out of loop
		}
		array[i] = changeValue;	// changes every element to changeValue
		}
    return array;
}


function keepGoing(array, changeValue, skipValue) {
	for (var i = 0, l = array.length; i < l ; i++) {  // iterates through array
	  if (array[i] === skipValue) {  // if the array value equals skipValue
	    continue  // continue...
	  }
	  array[i] = changeValue // changing every array element to changeValue
	}
	return array
}

function findBy(array, findFn) {
	for (var i = 0, l = array.length; i < l ; i++) {
	  if (findFn(array[i])) {  // looks for a value in array based on the return value of findFn
	    return array[i]
	  }
	}
	return null; // Return null if the value isn't found.
}
