function breakOut(a, c, s) {
  for(let i = 0; i < a.length; i++) {
    if(a[i] === s) break;
    a[i] = c
  }
  return a
}


function keepGoing(a, c, s) {
  for(let i = 0; i < a.length; i++) {
    if(a[i] === s) continue;
    a[i] = c
  }
  return a
}


function findBy(a, callback) {
  return a.find(callback)
}
