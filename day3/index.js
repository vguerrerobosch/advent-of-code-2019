const fs = require('fs')
const { manhattanDistance, minSteps } = require('./manhattanDistance')

let input = fs.readFileSync(`${__dirname}/input.txt`).toString().trim()

console.log(`Min distance: ${manhattanDistance(input)}`)
console.log(`Fewest combined steps: ${minSteps(input)}`)
