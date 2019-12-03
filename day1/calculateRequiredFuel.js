function calculateFuel(mass) {
  return Math.max(Math.floor(mass/3) - 2, 0)
}

function calculateFuelRecursive(mass) {
  let requiredFuel = [calculateFuel(mass)]

  while (requiredFuel[0]) {
    requiredFuel = [
      calculateFuel(requiredFuel[0]),
      ...requiredFuel
    ]
  }

  return requiredFuel.reduce((total, amount) => total + amount, 0)
}

module.exports.calculateFuel = calculateFuel
module.exports.calculateFuelRecursive = calculateFuelRecursive
