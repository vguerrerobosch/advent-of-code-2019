const test = require('ava')
const { intcode } = require('./intcode')

test('quine', t => {
  let program = '109,1,204,-1,1001,100,1,100,1008,100,16,101,1006,101,0,99'
  let output

  [program, output] = intcode(program, null)

  t.is(output.toString(), '109,1,204,-1,1001,100,1,100,1008,100,16,101,1006,101,0,99')
})

test('outputs 16 digit number', t => {
  let program = '1102,34915192,34915192,7,4,7,99,0'
  let output

  [program, output] = intcode(program, null)

  t.is(output[0].toString().length, 16)
})

test('output the large number in the middle', t => {
  t.deepEqual(intcode('104,1125899906842624,99', null), ['104,1125899906842624,99', [1125899906842624]])
})
