const fs = require('fs')
const { intcode } = require('./intcode')

function replaceFirstAddress(input, noun, verb) {
  input = input.split(',')
  input[1] = noun
  input[2] = verb
  return input.join(',')
}

let input = fs.readFileSync(`${__dirname}/input.txt`).toString()

console.log(`First value is ${intcode(replaceFirstAddress(input, 12, 2)).split(',')[0]}.`)

// Part 2

let noun = 0
let verb = 0

const expectedOutput = 19690720

loop: while(noun <= 99) {
  while(verb <= 99) {
    const output = intcode(replaceFirstAddress(input, noun, verb)).split(',')[0]

    if (output == expectedOutput) {
      break loop
    }

    verb++
  }

  noun++
  verb = 0
}

console.log(`Second value is ${noun * 100 + verb}.`)
