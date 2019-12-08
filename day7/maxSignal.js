const { intcode } = require('./intcode')

function phaseSettingSequence (input, sequence) {
  return sequence.split(',').map(e => parseInt(e)).reduce((output, phase) => {
    [program, output] = intcode(input, [phase, output])
    return parseInt(output.pop())
  }, 0)
}

function maxSignal (input) {
  let sequences = permutations([0, 1, 2, 3, 4])

  let currentValue = null
  let maxValue = null

  for (const sequence of sequences) {
    currentValue = phaseSettingSequence(input, sequence.toString())
    if (currentValue > maxValue) {
      maxValue = currentValue
    }
  }
  return maxValue
}

function permutations (arr) {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    let rest = permutations(arr.slice(0, i).concat(arr.slice(i + 1)))

    if (!rest.length) {
      result.push([arr[i]])
    } else {
      for (let j = 0; j < rest.length; j = j + 1) {
        result.push([arr[i]].concat(rest[j]))
      }
    }
  }
  return result
}

exports.maxSignal = maxSignal
exports.phaseSettingSequence = phaseSettingSequence
