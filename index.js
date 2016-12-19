function breakOut(array, changeValue, stopValue){// create a function with 3 parameters
  for (let i = 0, l = array.length; i < l; i++) {//do a for loops
  if (array[i] === stopValue){//condition is that if array[i] equals to stopValue
    break//break the loop
  }
    array[i]=changeValue// the elements of array equal to elements of changeValue
}
return array// and return the array
}

function keepGoing(array, changeValue, skipValue){//create the function with 3 parameters
  for (let i = 0, l = array.length; i < l; i++) {//do a for loops
    if(array[i]>=skipValue){//condition is that if the array[i] is greater than or equals to skipValue
      continue//continue the loop
    }
    array[i]=changeValue//the elements of array equal to elements of changeValue
}
return array// and return the array
}
function findBy(array, findFn){
  for (let i = 0, l = array.length; i < l; i++){
    if(array[i] !== findFn){
       return null
}
}
}
