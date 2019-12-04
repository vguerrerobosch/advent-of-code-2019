const test = require('ava')
const { validatePassword } = require('./validatePassword')

test('122345 is valid', t => {
  t.true(validatePassword(122345))
})

test('111123 is not valid', t => {
  t.falsy(validatePassword(111123))
})

test('135679 is not valid', t => {
  t.falsy(validatePassword(135679))
})

test('111111 is not valid', t => {
  t.falsy(validatePassword(111111))
})

test('223450 is not valid', t => {
  t.falsy(validatePassword(223450))
})

test('123789 is not valid', t => {
  t.falsy(validatePassword(123789))
})

test('112233 is valid', t => {
  t.true(validatePassword(112233))
})

test('123444 is not valid', t => {
  t.falsy(validatePassword(123444))
})

test('111122 is valid', t => {
  t.true(validatePassword(111122))
})
