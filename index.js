/*
1)
breakOut(array, changeValue, stopValue) which iterates through array and changes
every element to changeValue until the loop reaches stopValue.
Then we break out of the loop and return the array.
*/
function breakOut(array, changeValue, stopValue) {

for (var i = 0; i < array.length; i++) {

       if ( array[i] !== stopValue ) {
                      array[i] = changeValue  ;
       } else {
                      break ;
       }

}


   return  array
}
/*
describe('loops', function() {
  describe('breakOut(array, changeValue, stopValue)', function() {
    it('changes every element in `array` to `changeValue` until it reachs `stopValue`', function() {
      const c = Math.floor(Math.random() * 100)
      expect(breakOut([1, 1, 1, 1, 2, 1, 1], c, 2)).toEqual([
        c, c, c, c, 2, 1, 1
      ])
    })
  })
*/
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/*
2)
keepGoing(array, changeValue, skipValue) which iterates through array
and changes every element to changeValueexcept those that match skipValue. Then return the array.

*/
function keepGoing(array, changeValue, skipValue) {
  for (var i = 0; i < array.length; i++) {

         if ( array[i] !== skipValue)  {
                        array[i] = changeValue  ;
         } else {
                        continue ;
         }

  }

return array

}
/*
  describe('keepGoing(array, changeValue, skipValue)', function() {
    it('changes every element in `array` to `changeValue` unless the element === `skipValue`', function() {
      const c = Math.floor(Math.random() * 100)

      expect(keepGoing([1, 1, 1, 1, 2, 1, 1], c, 2)).toEqual([
        c, c, c, c, 2, c, c
      ])
    })
  })

*/
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/*
3)
findBy(array, findFn) which looks for a value in array based on the return value of findFn.
Return null if the value isn't found.
 Hint: Check the test file to know the signature of the findFn and the type of its return value
*/
function findBy(array, findFn) {

  for (var i = 0; i < array.length; i++) {

         //console.log(  findFn( array[i] )  ); 

         if (   !findFn( array[i] ) ) {
                        continue  ;
         } else {
                        return array[i] ;
         }

  }


   return null ;
}
/*
describe('findBy(array, findFn)', function() {
  it('finds the a value that satisfies `findFn`', function() {
    const c = Math.floor(Math.random() * 100)

    expect(findBy([1, 1, 1, 1, c, 1, 2], n => n === c)).toEqual(c)
  })

  it('returns `null` if no match found', function() {
    expect(findBy(["dog", "cat", "cow"], a => a === "moose")).toEqual(null)
  })
})
*/
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
