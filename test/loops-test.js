const expect = require('chai').expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

describe('index', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'loops.js'), 'utf-8')
  })

  describe('loops', () => {
    describe('breakOut(array, changeValue, stopValue)', () => {
      it('changes every element in `array` to `changeValue` until it reachs `stopValue`', () => {
        const c = Math.floor(Math.random() * 100)
        expect(breakOut([1, 1, 1, 1, 2, 1, 1], c, 2)).to.eql([
           c, c, c, c, 2, 1, 1
        ])
      })
    })

    describe('keepGoing(array, changeValue, skipValue)', () => {
      it('changes every element in `array` to `changeValue` unless the element === `skipValue`', () => {
        const c = Math.floor(Math.random() * 100)

        expect(keepGoing([1, 1, 1, 1, 2, 1, 1], c, 2)).to.eql([
          c, c, c, c, 2, c, c
        ])
      })
    })

    describe('findBy(array, findFn)', () => {
      it('finds the a value that satisfies `findFn`', () => {
        const c = Math.floor(Math.random() * 100)

        expect(findBy([1, 1, 1, 1, c, 1, 2], n => n === c)).to.equal(c)
      })

      it('returns `null` if no match found', () => {
        expect(findBy(["dog", "cat", "cow"], a => a === "moose")).to.equal(null)
      })
    })
  })
})
