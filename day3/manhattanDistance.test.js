const test = require('ava')
const { manhattanDistance, minSteps } = require('./manhattanDistance')

test('6', t => {
  t.is(manhattanDistance("R8,U5,L5,D3\nU7,R6,D4,L4"), 6)
})

test('159', t => {
  t.is(manhattanDistance("R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83"), 159)
})

test('135', t => {
  t.is(manhattanDistance("R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7"), 135)
})

test('step 30', t => {
  t.is(minSteps("R8,U5,L5,D3\nU7,R6,D4,L4"), 30)
})

test('step 610', t => {
  t.is(minSteps("R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83"), 610)
})

test('step 410', t => {
  t.is(minSteps("R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7"), 410)
})
