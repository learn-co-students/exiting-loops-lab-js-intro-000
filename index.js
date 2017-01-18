function breakOut(Myarray, AlterValue, FinishValue) {
  for (let i = 0; i < Myarray.length; i++) {
    if(Myarray[i] === FinishValue) {
      break
    } else {
      Myarray[i] = AlterValue;
    };
  };
  return Myarray;
};
function findBy(Myarray, AlterValue) {

  return Myarray.find(AlterValue);
}
function keepGoing(Myarray, AlterValue, FinishValue) {
  Myarray.forEach((x, i, Myarray) => {
    if (x !== FinishValue) Myarray[i] = AlterValue;
  })

  return Myarray;
}
