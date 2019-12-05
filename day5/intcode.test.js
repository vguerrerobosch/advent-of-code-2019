const test = require('ava')
const { intcode } = require('./intcode')

test('1,0,0,0,99 becomes 2,0,0,0,99', t => {
  t.deepEqual(intcode('1,0,0,0,99', 0), ['2,0,0,0,99', []])
})

test('2,3,0,3,99 becomes 2,3,0,6,99', t => {
  t.deepEqual(intcode('2,3,0,3,99', 0), ['2,3,0,6,99', []])
})

test('2,4,4,5,99,0 becomes 2,4,4,5,99,9801', t => {
  t.deepEqual(intcode('2,4,4,5,99,0', 0), ['2,4,4,5,99,9801', []])
})

test('1,1,1,4,99,5,6,0,99 becomes 30,1,1,4,2,5,6,0,99', t => {
  t.deepEqual(intcode('1,1,1,4,99,5,6,0,99', 0), ['30,1,1,4,2,5,6,0,99', []])
})

test('1002,4,3,4,33 becomes 1002,4,3,4,99', t => {
  t.deepEqual(intcode('1002,4,3,4,33', 0), ['1002,4,3,4,99', []])
})

test('1101,100,-1,4,0 becomes 1101,100,-1,4,99', t => {
  t.deepEqual(intcode('1101,100,-1,4,0', 0), ['1101,100,-1,4,99', []])
})

test('3,9,8,9,10,9,4,9,99,-1,8 input 8 output 1', t => {
  t.deepEqual(intcode('3,9,8,9,10,9,4,9,99,-1,8', 8)[1], [1])
})

test('3,9,8,9,10,9,4,9,99,-1,8 input not 8 output 1', t => {
  t.deepEqual(intcode('3,9,8,9,10,9,4,9,99,-1,8', 0)[1], [0])
})

test('3,9,7,9,10,9,4,9,99,-1,8 input less than 8 output 1', t => {
  t.deepEqual(intcode('3,9,7,9,10,9,4,9,99,-1,8', 7)[1], [1])
})

test('3,9,7,9,10,9,4,9,99,-1,8 input greater than 8 output 0', t => {
  t.deepEqual(intcode('3,9,7,9,10,9,4,9,99,-1,8', 10)[1], [0])
})
