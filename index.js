function breakOut(array, changeValue, stopValue) {
    for (var i = 0, l = array.length; i <= l; i++) {
        if (array[i] != stopValue) {
            array[i] = changeValue
        } else if (array[i] === stopValue) {
            break
        }
    }
    return array
}

function keepGoing(array, changeValue, skipValue) {
    for (var i = 0, l = array.length; i < l; i++) {
        if (array[i] != skipValue) {
            array[i] = changeValue
        } else if (array[i] === skipValue) {
            continue;
        }
    }
    return array
}

function findBy(array, findFn) {
    for (var i = array.length - 1; i >= 0; i--) {
        if (findFn(array[i])) {
            return array[i]
        }
    }
    return null

}