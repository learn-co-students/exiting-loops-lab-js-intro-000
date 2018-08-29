//breakOut(array, changeValue, stopValue) which iterates through array
// and changes every element to changeValue until the loop reaches stopValue.
//Then we break out of the loop and return the array.

function breakOut(array, changeValue, stopValue){
  for(let i=0; i< array.length; ++i){
      if(array[i] !== stopValue) {
		      array[i] = changeValue
      } else { //privilégier logique inverse: array[i] === stopValue (cf ci-dessous)
	  	    break
      }
  }
  return array
}

//keepGoing(array, changeValue, skipValue) which iterates through array
//and changes every element to changeValue except those that match skipValue. Then return the array.
function keepGoing(array, changeValue, skipValue){
  for(let i=0; i< array.length; ++i){
  	if(array[i] === skipValue) {
      continue
  	}
  array[i] = changeValue
  }
  return array
}

// which looks for a value in array based on the return value of findFn.
//Return null if the value isn't found.
//Hint: Check the test file to know the signature of the findFn and the type of its return value

function findBy(array, findFn){
  for (let i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
  }
  return null
}
