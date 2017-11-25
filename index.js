function breakOut(array, changeValue, stopValue){
  for(var i = 0; i < array.length; i++){
    array[i] = changeValue;
    if(i > stopValue){
      break;
    };
  };
  return array
};

function keepGoing(array, changeValue, skipValue){
  for(var i = 0; i < array.length; i++){
    if(array[i] == skipValue){
      continue
    };
    array[i] = changeValue;
  };
  return array;
};

//findBy(array, findFn) 
//- looks for a value in array based on the (return value of findFn).
//- Return null if the value isn't found

function findBy(array, findFn){
  for(var i = 0; i < array.length; i++){
    if(findFn(array[i])){
      return array[i]
    };
  };
};