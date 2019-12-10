// https://stackoverflow.com/questions/328107/how-can-you-determine-a-point-is-between-two-other-points-on-a-line-segment
function isBetween (a, b, c) {
  const crossProduct = (c[1] - a[1]) * (b[0] - a[0]) - (c[0] - a[0]) * (b[1] - a[1])
  if (crossProduct) return false

  const dotProduct = (c[0] - a[0]) * (b[0] - a[0]) + (c[1] - a[1]) * (b[1] - a[1])
  if (dotProduct < 0) return false

  const sqLengthBA = (b[0] - a[0]) * (b[0] - a[0]) + (b[1] - a[1]) * (b[1] - a[1])
  if (dotProduct > sqLengthBA) return false

  return true
}

function parseMap (map) {
  return map.split('\n')
    .map(str => str.replace(/\./g, 0)
      .replace(/#/g, 1)
      .split('')
      .map(num => parseInt(num))
    )
}

function asteroidsDetected (P, map) {
  let asteroidsDetected = 0

  for (var i = 0; i < map.length; i++) {
    for (var j = 0; j < map[i].length; j++) {
      if (P[0] == i && P[1] == j) continue
      if (map[i][j] && hasDirectLineOfSight(P, [i, j], map)) asteroidsDetected++
    }
  }

  return asteroidsDetected
}

function hasDirectLineOfSight (P, Q, map) {
  for (var i = 0; i < map.length; i++) {
    for (var j = 0; j < map[i].length; j++) {
      if ((P[0] == i && P[1] == j) || (Q[0] == i && Q[1] == j)) continue
      if (map[i][j] && isBetween(P, Q, [i, j])) return false
    }
  }

  return true
}

function findBestSpot (map) {
  let bestSpotTotal = 0
  for (var i = 0; i < map.length; i++) {
    for (var j = 0; j < map[i].length; j++) {
      if (map[i][j]) {
        bestSpotTotal = Math.max(bestSpotTotal, asteroidsDetected([i, j], map))
      }
    }
  }

  return bestSpotTotal
}

exports.parseMap = parseMap
exports.asteroidsDetected = asteroidsDetected
exports.findBestSpot = findBestSpot
