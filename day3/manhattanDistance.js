function manhattanDistance(input) {
  const int = findIntersections(input)

  return result = Math.min(
    ...int.map(
      e => e.split(',')
        .reduce((total, amount) => total + Math.abs(parseInt(amount)), 0)
    )
  )
}

function minSteps(input) {
  [firstWire, secondWire] = input.split('\n').map(value => value.split(','))

  const firstGrid = path(firstWire)
  const secondGrid = path(secondWire)

  let int = firstGrid.filter(e => secondGrid.includes(e))

  return Math.min(...int.map(e => firstGrid.findIndex((el) => el == e) + secondGrid.findIndex((el) => el == e) + 2))
}

function findIntersections(input) {
  [firstWire, secondWire] = input.split('\n').map(value => value.split(','))

  const firstGrid = path(firstWire)
  const secondGrid = path(secondWire)

  return firstGrid.filter(e => secondGrid.includes(e))
}

function path(wire) {
  let grid = []
  let direction
  let distance
  let position = [0,0]

  wire.forEach((path) => {
    direction = path.charAt(0)
    distance = path.substring(1)

    for (var i = 1; i <= distance; i++) {
      switch (direction) {
        case 'R':
          position = [position[0] + 1, position[1]]
          break
        case 'D':
          position = [position[0], position[1] - 1]
          break
        case 'L':
          position = [position[0] - 1, position[1]]
          break
        case 'U':
          position = [position[0], position[1] + 1]
          break
      }
      grid.push(position.join(','))
    }
  })

  return grid
}

exports.manhattanDistance = manhattanDistance
exports.minSteps = minSteps
