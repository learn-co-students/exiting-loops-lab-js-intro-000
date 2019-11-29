function breakOut(array, changeValue, stopValue){

  for (let x=0; x < array.length; x++){
    var y = array[x]
    if (y == stopValue)
      break
    else
      array[x] = changeValue;
  }//end for
  return array;
}

function keepGoing(array, changeValue, skipValue){

  for (let i=0; i < array.length; i++){
    var y = array[i]
    if (y == skipValue)
      continue
    else
      array[i] = changeValue;
  }//end for

  return array;
}

function findBy(array, findFn){
  var temp = findFn();
  var tempFlag = 0;

  for (let i = 0; i < array.length; i++){

    if (array[i] == temp){
      tempFlag = 1
    }
 }//end for

 if (tempFlag === 0)
   return null
 else
   return temp


}
