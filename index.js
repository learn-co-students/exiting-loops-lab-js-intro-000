function breakOut(array, changeValue, stopValue){
  for (var i = 0; i < array.length; i++) {
    if ((array[i] !== changeValue) && (array[i] !== stopValue)){
      array[i] = changeValue
    } else if (array[i] === stopValue){
      break
    }
  }
  return array;
}

function keepGoing(array, changeValue, skipValue){
  for (var i = 0; i < array.length; i++) {
    if ((array[i] !== changeValue) && (array[i] !== skipValue)){
      array[i] = changeValue
    } else if (array[i] === skipValue){
      continue
    }
  }
  return array
}

function findBy(array, findFn){
  var result = null
  array.forEach(function(ele, i, arr){
    var ele = array[i]
    if (findFn(ele, i, arr)){
      result = ele
    }
  });
  return result
}
