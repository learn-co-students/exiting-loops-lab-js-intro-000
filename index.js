var array = [2, 2, 1, 1 ];
function breakOut(array, changeValue, stopValue) {
  for ( var i = 0; i < array.length; i++) {
    if(array[i] === stopValue) {//boolean, either gives t or f. put it in if statement
      break;
    }
    array[i] = changeValue;   //array[i] is NOW changeValue.
  }
return array;
}
breakOut(array, 9, 1);


var array = [2, 2, 1, 1 ];
function keepGoing(array, changeValue, skipValue) {
  for ( var i = 0; i < array.length; i++) {
    if (array[i] === skipValue) {
      continue;
    }
    array[i] = changeValue;
  }
return array;
}
keepGoing(array, 5, 1);


var array = [5, 4, 2, 3, 1, 8, 9 ];
function findBy(array, findFn) {
  for (var i = 0; i < array.length;i++) {
    if (findFn(array[i])) {
      return array[i]
    }
  }
}

findBy(array, (n) => n % 2 === 0);
findBy(array, (n) => n > 5 );

array = ["dog", "cat", "horse", "mouse", "ant", "cow", "antelope"];
findBy(array, (n) => n.length > 4 );
findBy(array, (n) => n.includes("use") );



//findBy(array, 10);
//findBy(["dog", "cat", "horse", "mouse", "ant", "cow", "antelope"], ("cat") => 
//array === findFn);
