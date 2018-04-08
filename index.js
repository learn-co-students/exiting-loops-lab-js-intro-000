//function breakOut(array, changeValue, stopValue) {
  //array.forEach( element => {
    //array.splice(element[index],1,changeValue);
//  }
//};

function breakOut(array, changeValue, stopValue) {
  newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== stopValue) {
      newArray[i] = changeValue;
    } elseif (array[i] = stopValue) {
      break
      }
    }
    return newArray;
 }
