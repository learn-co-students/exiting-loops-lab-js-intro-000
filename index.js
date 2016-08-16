function breakOut(array, changeValue, stopValue) {
	// body...
	for (var i = 0, l = array.length; l > i; i++) {
		if (array[i] == stopValue){
			break;
		};
		array[i] = changeValue;
	};
	return array;
};

function keepGoing(array, changeValue, skipValue) {
	// body...
	for (var i = 0, l = array.length; l > i; i++) {
		if (array[i] == skipValue){
			continue;
		};
       array[i] = changeValue;
	};
    return array;
};
                       //n => n === c
function findBy(array, findFn) {
	// body...
	for (var i = 0 , l = array.length; i < l; i++) {
		if (findFn(array[i])){
			return array[i]
		}
	}
	return null;  
};

