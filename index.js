
function breakOut(array, changeValue, stopValue){
  for (let i = 0; i < array.length && (array[i] != stopValue) ; i++) {

    array[i]=changeValue
  }
  return array
}
