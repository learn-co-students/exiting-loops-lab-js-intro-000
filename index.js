


// - `breakOut(array, changeValue, stopValue)` which iterates through `array` and changes every element to `changeValue`
//          until the loop reaches `stopValue`. Then we `break` out of the loop and return the array.

// I thought I would use .forEach but per google it's the wrong tool to use
//I used a for loop and an if statement to check if the element was the same as the stop value
// if it wasnt (true?) then change the value with the changevalue variable
// if it was the same (false?) then break the loop
// finally return the array
function breakOut(array, changeValue, stopValue) {
  for(var i = 0; i < array.length; ++i) {
    if (array[i] != stopValue) {
    //  array[i] = changeValue;
      array.splice(i, 1, changeValue)
     }
     else {
        break
     }
  }
  return array
// console.log(array)
}


// `keepGoing(array, changeValue, skipValue)` which iterates through `array` and changes every element to `changeValue`
//          except those that match `skipValue`. Then return the array.
// im thinking i can either set the variable equal to itself and in essence skips it, or leave it alone with continue and go back to the top
// to change the value, I can either delete and reset or set the value:: is there a difference?
function keepGoing(array, changeValue, skipValue) {
  for(var i = 0; i < array.length; ++i) {
    if (array[i] != skipValue) {
      array[i] = changeValue;
    //  array.splice(i, 1, changeValue)
     }
    else {
      continue
     }
  }
  return array
// console.log(array)
}


// `findBy(array, findFn)` which looks for a value in `array` based on the return value of `findFn`. Return `null` if the
//  value isn't found. **Hint:** *Check the test file to know the signature of the findFn and the type of its return value*
// by setting the findFn to the passed function it was able to plug in the value and test True/False


function findBy(array, findFn) {
  for (let i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i]
    }
  }
  return null
}
