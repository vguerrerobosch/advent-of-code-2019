const fs = require('fs')
const { getTotalOrbits, getOrbitalTransfers } = require('./calculateOrbits')

let input = fs.readFileSync(`${__dirname}/input.txt`).toString().trim()

console.log(`Total orbits: ${getTotalOrbits(input)}`)
console.log(`Orbital transfers: ${getOrbitalTransfers(input, 'YOU', 'SAN')}`)
