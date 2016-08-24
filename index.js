function breakOut(array,changeValue,stopValue){
  var i,l
  for( i=0,l = array.length;i<l;i++){
    if(array[i]==stopValue){
      break
    }
    array[i]=changeValue
  }
  return array
}

function keepGoing(array, changeValue, skipValue){
  var i,l
  for(i=0,l=array.length;i<l;i++){
    if(array[i]==skipValue){
      continue
    }
    array[i]=changeValue
  }
  return array
}

/*function findFn(){
  return value
}*/

function findBy(array, findFn){
  var testValue = findFn
  for(var i=0,l=array.length;i<l;i++){
    if(array[i]==testValue){
      return array[i]
    }
  }
  return null
}
