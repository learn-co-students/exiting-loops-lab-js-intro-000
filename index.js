function breakOut(array, changeValue, stopValue){

  array.forEach(function(item,i,array){
if(item!=stopValue){
  array[i]=changeValue;
}else{ break;
}

  });
  return array;
}

function keepGoing(array, changeValue, skipValue){


  array.forEach(function(item,i,array){
if(item!=skipValue){
  array[i]=changeValue;
}else{continue;}

  });
  return array;
}

function findBy(array, findFn){
let s=null;
  array.forEach(function(item,i,array){
if(item!==findFn){
  continue;
}else{
s=1;}

  });
  return s;
}
