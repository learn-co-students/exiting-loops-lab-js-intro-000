function breakOut(array, changeValue, stopValue) {
  for (var i = 0; array.length - 1; i++) {
    if (array[i] === stopValue) {
      break
    }
    else {
      array[i] = changeValue
    }
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
	for (let i = 0; i < array.length; i++) {
  		if (array[i] === skipValue) {
   		continue
  		}
		else {
 			array[i] = changeValue
        }
	}
	return array
}

function findBy(array, findFn) {
  for (let i = 0; i < array.length; i++) {
        if (!findFn(array[i])) {
   		   continue
  		}
		  else {
 			    return array[i]
      }
	}
  return null
}
