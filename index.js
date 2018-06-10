breakOut(array, changeValue, stopValue){
  for(let i = 0; i < array.length; i++){
    if (i !== stopValue) {
      array[i] = changeValue;
      break;
    }
  }
}