/* breakOut(array, changeValue, stopValue) which iterates
 through array and changes every element to changeValue
  until the loop reaches stopValue. Then we break out of 
  the loop and return the array.*/ 

function breakOut(array, changeValue,stopValue){
  for (var i=0 ,l=array.length; i<l; i++){
    if (array[i] >= stopValue){
      break;
    }
    array[i]+changeValue;
  }
}
