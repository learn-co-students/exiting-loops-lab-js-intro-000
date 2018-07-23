function breakOut(array, changeValue, stopValue){
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== stopValue) {
        array[i]=changeValue
    }
    else{
        break
    }
  }
  return array[i]
}

function keepGoing(array, changeValue, skipValue){
  for (let i = 0; i < array.length; i++) {
    if(array[i] !== skipValue){
      array[i]=changeValue
    }
    else{
      continue
    }
  }
  return array
}

functon findBy(array, findFn){
  found=null
  for (let i = 0; i<array.length; i++){
    if(array[i])!==findFn()){
      continue
    }
    else{
      found=array[i]
    }
  }
  return found
}
