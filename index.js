function breakOut(arr, valChange, valStop) {
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === valStop) {
      break;
    }
    arr[i] = valChange;
  }
  return arr;
}

function keepGoing(arr, valChange, valSkip) {
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === valSkip) {
      continue;
    }
    arr[i] = valChange;
  }
  return arr;
}

function findBy(arr, funcFind) {
  for (let i=0; i<arr.length; i++) {
    if (funcFind(arr[i])) {
      return arr[i];
    }
  }
  return null;
}