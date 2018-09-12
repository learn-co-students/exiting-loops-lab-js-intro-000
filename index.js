function breakOut(array, changeValue, stopValue){
  for(let i = 0; i < array.length; i++){
    if(array[i] === stopValue){
      break;
    }array[i] = `${changeValue}`;
  } return array.join();
}

function keepGoing(array, changeValue, skipValue){
  for(let i = 0; i < array.length; i++){
    if(array[i] === skipValue){
      continue;
    }
    array[i] = `${changeValue}`;
  }
  return array.join();
}

function findBy(array, findFn){
  for(let i = 0; i < array.length; i++){
    if(findFn(array[i])){
      return array[i];
    }else if(array[i] === String){
      console.log('null');
    } 
  } 
}
