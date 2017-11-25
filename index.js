function breakOut(array, changeValue, stopValue) {
    array.forEach((element, index) => {
        if (element === stopValue) {
            break
            element = changeValue;
        }
    })
    return array;
}

function keepGoing(array, changeValue, skipValue) {
    array.forEach((element, index, array) {
        if (element === skipValue) {
            continue;
            element = changeValue;
        }
    })
}

function findBy(array, findFn) {
    for ( let i = 0; i < array.length; i++) {
        if (findFn(array[i])) {
            return array[i]
        } else {
            return null
        }
    }
}