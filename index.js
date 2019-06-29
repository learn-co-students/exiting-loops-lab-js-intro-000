function breakOut(array, changeValue, stopValue){
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== stopValue) {
        array[i]=changeValue
    }
    else{
        break
    }
  }
  return array
}

function keepGoing(array, changeValue, skipValue){
  for (var i = 0; i < array.length; i++) {
    if(array[i] !== skipValue){
      array[i]=changeValue
    }
    else{
      continue
    }
  }
  return array
}

function findBy(array, findFn){
  debugger;
  var test=findFn()
  var found
  for(var i=0; i<array.length; i++){
    if(findFn(array[i])){
      found=array[i]
      break
    }
  else{
    found = null
  }
}
  return found
}
