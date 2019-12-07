function parseOrbits (input) {
  return input.split('\n').reduce((orbits, line) => {
    [p, q] = line.split(')')

    orbits[q] = p

    return orbits
  }, [])
}

function getObjectDepth (object, orbits) {
  if (object == 'COM') return 0
  return 1 + getObjectDepth(orbits[object], orbits)
}

function getTotalOrbits (input) {
  let orbits = parseOrbits(input)

  return Object.keys(orbits).reduce((totalOrbits, object) => totalOrbits += getObjectDepth(object, orbits), 0)
}

function getObjectOrbits (object, orbits) {
  if (object == 'COM') { return ['COM'] }

  return [object, ...getObjectOrbits(orbits[object], orbits)]
}

function getOrbitalTransfers (input, from, to) {
  let orbits = parseOrbits(input)

  const fromOrbits = getObjectOrbits(from, orbits)
  const toOrbits = getObjectOrbits(to, orbits)

  for (const obj of fromOrbits) {
    if (toOrbits.includes(obj)) { return fromOrbits.indexOf(obj) + toOrbits.indexOf(obj) - 2 }
  }
}

exports.getTotalOrbits = getTotalOrbits
exports.getOrbitalTransfers = getOrbitalTransfers
