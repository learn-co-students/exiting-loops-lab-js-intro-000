var breakOut =(arr,changeValue,stopValue)=>{
  for(var i=0;i<=arr.length;i++){
    if(arr[i]==stopValue){
      break;
    }
    arr[i]=changeValue;

  }

return arr;

}

var keepGoing =(arr,changeValue,skipValue)=>{
  for(var j=0;j<arr.length;j++){
    if(arr[j]==skipValue){
      continue;
    }
    arr[j]=changeValue;
  }

return arr;
}

var findBy = (arr,findFn) =>{
  if(arr.find(findFn)===undefined){
    return null;
  }
  return arr.find(findFn);
}
