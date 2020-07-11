var breakOut=(array, changeValue, stopValue) =>{
  for(let i=0; i<array.length; i++){
    if(array[i]===stopValue){
      break;
    }
    array[i]=changeValue
  }
  return array;
}

var keepGoing= (array, changeValue, skipValue) =>{
  for(let i=0; i<array.length; i++){
    if(array[i]===skipValue){
      continue;
    }
    array[i]=changeValue;
  }
  return array;
}

var findBy= (array, findFn) =>{
  var a=findFn();
  for(let i=0; i<array.length; i++){
     if(array[i]===a){
       return a;
     }
     else{
       if(i===(array.length-1)){
         return null;
       }
     }
  }
}
