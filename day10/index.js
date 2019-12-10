const fs = require('fs')
const { parseMap, findBestSpot } = require('./monitoring')

const map = parseMap(fs.readFileSync(`${__dirname}/input.txt`).toString().trim())

console.log(`Best spot asteriods detected: ${findBestSpot(map)}`)
