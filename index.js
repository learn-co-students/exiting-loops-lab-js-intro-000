
function breakOut(array, changeValue, stopValue){

  for (var i = 0; i < array.length; i++) {
      if(array[i] !== stopValue){
        array[i] = changeValue
      } else {
        return array
        break
      }

  }
}
const c = Math.floor(Math.random() * 100)
breakOut([1, 1, 1, 1, 2, 1, 1], c, 2 );


function keepGoing(array, changeValue, skipValue){
  for (var i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue
    } else {
      array[i] = changeValue
    }
  }
  return array
}
keepGoing([1,1,1,2,1,1,1],90,2);

function findBy(array, findFn) {
  for (var i = 0; i < array.length; i++) {

    if (findFn(array[i])) {
      return array[i]
      break
    } else {
      array[i] = null
    }
  }
}
findBy([1,1,1,1,2,1,3], (a) => a === 3)
