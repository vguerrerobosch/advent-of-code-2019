function intcode(input) {
  input = input.split(',').map(i => parseInt(i))

  let opcode

  for (var i = 0;; i += 4) {
    opcode = input[i]

    if (![1,2,99].includes(opcode)) {
      throw `Something went wrong! Unknown opcode ${opcode}`
    }

    if (opcode == 99) {
      break
    }

    if (opcode == 1) {
      input[input[i+3]] = input[input[i+1]] + input[input[i+2]]
    } else if (opcode == 2) {
      input[input[i+3]] = input[input[i+1]] * input[input[i+2]]
    }
  }

  return input.join(',')
}

exports.intcode = intcode
