/**function breakOut(array, changeValue, stopValue) {
  var newarr=[];
  for(var i=0; i<array.length; i++){
    if(array[i] !== stopValue){
      newarr.push(changeValue);
    }if(array[i] === stopValue){
      break;
    }
  }
  return newarr;
}**/

function breakOut(array, changeValue, stopValue) {
  for(var i=0; i<array.length; i++){
    if(array[i] !== stopValue){
      array[i] = changeValue;
    }if(array[i] === stopValue){
      break;
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue) {
for(var i=0; i<array.length; i++){
  if(array[i] !== skipValue){
    array[i]=changeValue;
  }
}
return array;
}

function findBy(array, findFn){
  for(var i=0; i<array.length; i++) {
    if(findFn(array[i])){
      return array[i];
    }
  }
}
