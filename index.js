
function breakOut(array, changeValue, stopValue){
	for(let i = 0; i < array.length; i++){
		if (array[i] != stopValue){
			array[i] = changeValue
		} else {
			break
		}

	}
	return array

} 

function keepGoing(array, changeValue, skipValue){
	for(let i = 0; i < array.length; i++){
		if (array[i] != skipValue){
			array[i] = changeValue
		} else {
			continue
		}

	}
	return array

} 
// which iterates through array 
// and changes every element to changeValue 
// except those that match skipValue. 
// Then return the array.

function findBy(array, findFn) {
  for(let i = 0; i < array.length; i++) {
    if( findFn(array[i]) === true){
      return array[i];
    }
  }
  return null;
}
// which looks for a value in array 
// based on the return value of findFn. 
// Return null if the value isn't found. 
// Hint: Check the test file to know the 
// signature of the findFn and the type
//  of its return value
