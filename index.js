

function breakOut(array, changeValue, stopValue){
  for(var i = 0; i < array.length; i++){
    if(array[i] == =stopValue){
      break;
    }else{
      array[i]=changeValue;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue){
  for(var i = 0; i < array.length; i++){
    if(array[i]===skipValue){
      continue;
    }else{
      array[i]=changeValue;
    }
  }
  return array;
}

//Long one...Thought I needed a foreach..confusing
function findBy(array, findFn) {
  for (let i = 0, l = array.length; i < l; i++) {
   if (findFn(array[i])) {
     return array[i];
   }
 }
}
