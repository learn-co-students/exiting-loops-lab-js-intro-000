function breakOut(arr, chVal, stVal) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === stVal) {
      break
    }
    arr[i] = chVal
  }
  return arr
}

function keepGoing(arr, chVal, skVal) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === skVal) {
      continue
    }
    arr[i] = chVal
  }
  return arr
}

function findBy(arr, findFn) {
  for (let i = 0; i < arr.length; i++) {
    if (findFn(arr[i])) {
      return arr[i]
    }
  }
  return null
}
