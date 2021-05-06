const breakOut = (arr, changeValue, stopValue) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == stopValue) break;
    arr[i] = changeValue;
  }
  return arr;
}

const keepGoing = (arr, changeValue, skipValue) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]  == skipValue) continue;
    else arr[i] = changeValue;
  }
  return arr;
}

const findBy = (arr, findFn) => {
  let res =  arr.find(findFn);
  return res ? res : null;
}

// const c = Math.floor(Math.random() * 100)
// console.log(findBy([1, 1, 1, 1, c, 1, 2], n => n === c));
