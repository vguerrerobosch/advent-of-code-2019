function intcode (input, id) {
  input = input.split(',').map(i => parseInt(i))

  let i = 0
  let opcode = null
  let firstParamMode = null
  let secondParamMode = null
  let thirdParamMode = null
  let firstParam = null
  let secondParam = null
  let thirdParam = null
  let relativeBase = 0

  let output = []

  while (opcode != 99) {
    opcode = input[i] % 100

    if (![1, 2, 3, 4, 5, 6, 7, 8, 9, 99].includes(opcode)) {
      throw `Something went wrong! Unknown opcode ${opcode}`
    }

    firstParamMode = Math.floor((input[i] % 1000) / 100)
    secondParamMode = Math.floor((input[i] % 10000) / 1000)
    thirdParamMode = Math.floor((input[i] % 100000) / 10000)

    firstParam = firstParamMode == 2 ? input[relativeBase + input[i + 1]]
      : firstParamMode == 1 ? input[i + 1]
        : input[input[i + 1]]

    firstParam = firstParam || 0

    secondParam = secondParamMode == 2 ? input[relativeBase + input[i + 2]]
      : secondParamMode == 1 ? input[i + 2]
        : input[input[i + 2]]

    secondParam = secondParam || 0

    thirdParam = thirdParamMode == 2 ? input[relativeBase + input[i + 3]]
      : thirdParamMode == 1 ? input[i + 3]
        : input[input[i + 3]]

    thirdParam = thirdParam || 0

    switch (opcode) {
      case 1: // sum
        input[input[i + 3] + (thirdParamMode == 2) * relativeBase] = firstParam + secondParam
        i += 4
        break

      case 2: // multiply
        input[input[i + 3] + (thirdParamMode == 2) * relativeBase] = firstParam * secondParam
        i += 4
        break

      case 3: // input
        input[input[i + 1] + (firstParamMode == 2) * relativeBase] = id
        i += 2
        break

      case 4: // output
        input[input[i + 1] + (firstParamMode == 2) * relativeBase] = firstParam
        output.push(firstParam)
        i += 2
        break

      case 5: // jump-if-true
        if (firstParam) {
          i = secondParam
        } else {
          i += 3
        }

        break

      case 6: // jump-if-false
        if (!firstParam) {
          i = secondParam
        } else {
          i += 3
        }

        break

      case 7: // less than
        input[input[i + 3] + (thirdParamMode == 2) * relativeBase] = (firstParam < secondParam) ? 1 : 0
        i += 4
        break

      case 8: // equals
        input[input[i + 3] + (thirdParamMode == 2) * relativeBase] = (firstParam == secondParam) ? 1 : 0
        i += 4
        break

      case 9: // relative base offset
        relativeBase += firstParam
        i += 2
        break
    }
  }

  return [input.join(','), output]
}

exports.intcode = intcode
