function breakOut(array, changeValue, stopValue){
  
  var newArray = array;
  for (var i = 0, l = newArray.length; i<l; i++){
     
    if( newArray[i] == stopValue){

       break;
      
    }else{

     newArray[i] = changeValue;
       
    }  
  }

 return newArray;
  
};


function keepGoing(array, changeValue, skipValue){

  var newArray = array;
  for (var i = 0, l = newArray.length; i<l; i++){
     
    if( newArray[i] == skipValue){

       continue;
      
    }else{
      

     newArray[i] = changeValue;
       
    }  
  }

 return newArray;

  
}

function findBy(array, findFn){
  
  var newArray = array;
  var newfindFn = null;
  for (var i = 0, l = newArray.length; i<l; i++){

    if(findFn(newArray[i])){
       return newArray[i];                  
     }
  }  
     
 return null;

}


  



