const test = require('ava')
const { getTotalOrbits, getOrbitalTransfers } = require('./calculateOrbits')

test('42', t => {
  const input = 'COM)B\nB)C\nC)D\nD)E\nE)F\nB)G\nG)H\nD)I\nE)J\nJ)K\nK)L'
  t.is(getTotalOrbits(input), 42)
})

test('YOU SAN', t => {
  const input = 'COM)B\nB)C\nC)D\nD)E\nE)F\nB)G\nG)H\nD)I\nE)J\nJ)K\nK)L\nK)YOU\nI)SAN'
  t.is(getOrbitalTransfers(input, 'YOU', 'SAN'), 4)
})
