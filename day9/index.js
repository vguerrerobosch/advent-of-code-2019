const fs = require('fs')
const { intcode } = require('./intcode')

let boost = fs.readFileSync(`${__dirname}/input.txt`).toString()

console.log(`\x1b[32mThe BOOST keycode is ${intcode(boost, 1)[1][0]}`)
console.log(`The coordinates of the distress signal are ${intcode(boost, 2)[1][0]}`)
