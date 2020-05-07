
function breakOut(array, changeValue,stopValue){
  const c = Math.floor(Math.random() * 100)
    for(var i =0; i < array.length; i++){
      if(array[i] ===2){
        break;
      }else {
        array[i] = changeValue;
      }
    }
  return array;
}


function keepGoing(array, changeValue,stopValue){
  const c = Math.floor(Math.random() * 100)
    for(var i =0; i < array.length; i++){
      if(array[i] === 2){
        continue;
      }else {
        array[i] = changeValue;
      }
    }
  return array;
}

function findBy(array, findFn){
    const c = Math.floor(Math.random() * 100);
    //var result;
//var n;
    //[1, 1, 1, 1, c, 1, 2]
    for(var i = 0; i < array.length; i++){
              if(findFn(array[i])){           //
                return array[i];
}
}return null;
}
