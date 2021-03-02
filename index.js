function breakOut(array, changeValue, stopValue) {
  for(var i=0;i<array.length;i++) {
    if(array[i] == stopValue) {break}
    else{array[i]=changeValue}
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for(var i=0; i<array.length; i++) {
    if(array[i]==skipValue) {continue}
    else {array[i]=changeValue}
  }
  return array
}


 function findBy (array, findFn) {
   var val = 0
   for (var i=0; i<array.length;i++) {
     var numb = findFn(array[i])
     if (numb==true) {val=array[i]
     break}
     else{val=null}
   }
   return val
 }
