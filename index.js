function breakOut(array,change,stop){
  for(var i=0;i<array.length;i++){
    if(array[i] !== stop){
      array[i] = change;
    }
    else break;
  }
  return array;
}

function keepGoing(array,change,skip){
  for(let i=0;i<array.length;i++){
    if(array[i] !== skip){
      array[i] = change;
      //console.log(`changed`);
    }
    else{ //console.log("skipped");
      continue;
    }
  }
  return array;
}

function findBy(array, findFn){

  for(let i=0;i<array.length;i++){
    if(findFn(array[i])){
    //  console.log(array[i]);
      return array[i];
    }


  }
}
