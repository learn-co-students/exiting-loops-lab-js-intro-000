function breakOut(array, changeValue, stopValue){
  for (let i = 0, l = array.length; i < l; i++) {
  if (array === changeValue){
    break
  }
    array[i]=changeValue
}
return array
}
