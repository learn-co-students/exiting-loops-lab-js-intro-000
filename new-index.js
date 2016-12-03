//updated thought with array[i] defined by a variable in the loop

function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++) {
    var values = array[i]

    if (values != findFn) {
      continue
    }
    else if (values == findFn){
      return findFn
      break
    }
    else if (values != findFn && i == array.length-1) {
      return null
    }
  }
}





//initial thought
function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++){
    if (array[i] != findFn){
      continue
    }
    else if (array[i] == findFn){
      return findFn
    }
    else if (i == array.length-1 && array[i] != findFn) {
      return null
    }
  }
}
