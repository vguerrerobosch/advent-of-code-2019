const fs = require('fs')

const {
  calculateFuel,
  calculateFuelRecursive
} = require('./calculateRequiredFuel')

let input = fs.readFileSync(`${__dirname}/input.txt`).toString().split("\n").filter(Boolean)

// Part 1
let requiredFuel = input.reduce((total, amount) => {
  return total + calculateFuel(amount)
}, 0)

// Part 2
let requiredFuelRecursive = input.reduce((total, amount) => {
  return total + calculateFuelRecursive(amount)
}, 0)

console.log(`Required fuel: ${requiredFuel}`)
console.log(`Required fuel: ${requiredFuelRecursive}`)
