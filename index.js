
function breakOut(a, x, k) {
  for (var i=0; i<a.length; ++i) {
    if (a[i] === k) break;
    a[i] = x;
  }
  return a;
}

function keepGoing(a, x, k) {
  for (var i=0; i<a.length; ++i) {
    if (a[i] === k) continue;
    a[i] = x;
  }
  return a;
}

function findBy(a, f) {
  for (var i=0; i<a.length; ++i) {
    if (f(a[i])) return a[i];
  }
  return null;
}
