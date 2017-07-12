

 function breakOut(array, changeValue, stopValue){
   for(let i = 0; i < array.length; i++){
     if(array[i] !== stopValue){
       array[i] = changeValue;
     }else{
       break;
     }

   }
    return array;
 }

// keepGoing(array, changeValue, skipValue) which iterates through array and changes every element to
// changeValue except those that match skipValue. Then return the array.

function keepGoing(array, changeValue, skipValue){
  for(let i = 0; i < array.length; i++){
    if(array[i] !== skipValue){
      array[i] = changeValue;
    }else{
      continue;
    }
  }
  return array;
}

function findBy(array, findFn){
  for(let i = 0; i < array.length; i++){
    if(findFn(array[i])){
      return array[i];

    }
  }
}
