const fs = require('fs')
const { intcode } = require('./intcode')

let input = fs.readFileSync(`${__dirname}/input.txt`).toString()
let id = 1

console.log(`Diagnostic results: ${intcode(input, id)[1]}`)

input = fs.readFileSync(`${__dirname}/input.txt`).toString()
id = 5

console.log(`Diagnostic results: ${intcode(input, id)[1]}`)
