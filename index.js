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
function findFn(seed){
  const c = Math.floor(Math.random(seed) * 100)
  console.log(c)
  return c

}

function findBy(array, callBack){
  var testValue = callBack(5)
  console.log(testValue)
  console.log(array)
  for(var i=0,l=array.length;i<l;i++){
    if(array[i]==testValue){
      return array[i]
    }
  }
  return null
}
