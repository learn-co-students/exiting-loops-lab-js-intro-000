let breakOut = (array, changeValue, stopValue) =>{
  for (let i = 0; i < array.length ;i++){
    if(array[i] === stopValue){
      break;
    }
    array[i] = changeValue;
  }
  return array;
};


let keepGoing = (array, changeValue, skipValue)=>{
  for (let i = 0; i <array.length; i++){
    if(array[i] === skipValue){
      continue;
    }
    array[i] = changeValue;
  }
  return array;
};


const findBy = (array, findFn)=>{
  for (let i = 0; i < array.length; i++){
    
    if(findFn(array[i])){
      return array[i];
    }
  }
  return null;
};