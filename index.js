//breakOut(array, changeValue, stopValue)

function breakOut(array, changeValue, stopValue){
    for (let i = 0; i < array.length; i++){
        if (array[i] == stopValue){
            break;
        }else{
            array[i] = changeValue;
        }
        
    }
    return array;
}
//which iterates through array and changes every element to changeValue until
//the loop reaches stopValue.Then we break out of the loop and return the array.

//keepGoing(array, changeValue, skipValue)
function keepGoing(array, changeValue, skipValue){
    for (let i = 0; i < array.length; i++){
        if (array[i] == skipValue){
            continue;
        }
        array[i] = changeValue;
    }
    return array;
}
//which iterates through array and changes every element to changeValue except
//those that match skipValue.Then return the array.

//findBy(array, findFn)
function findBy(array, findFn){
    for (let i = 0; i < array.length; i++){
        if (findFn(array[i])){
            return array[i];
        }
    }
}
//which looks for a value in array based on the return value of findFn.Return null
//if the value isn't found. Hint: Check the test file to know the signature of the
//findFn and the type of its return value