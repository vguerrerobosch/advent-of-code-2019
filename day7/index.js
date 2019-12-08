const fs = require('fs')
const { maxSignal } = require('./maxSignal')

let input = fs.readFileSync(`${__dirname}/input.txt`).toString()

console.log(`Max is: ${maxSignal(input)}`)
