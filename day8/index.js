const fs = require('fs')

let input = fs.readFileSync(`${__dirname}/input.txt`).toString().trim()

const width = 25
const height = 6
const pixels = width * height

const layers = input.match(new RegExp(`.{1,${pixels}}`, 'g'))

let minZeros = pixels
let minZerosIndex = 0

layers.forEach((layer, index) => {
  const zeros = layer.match(/0/g).length
  if (zeros < minZeros) {
    minZeros = zeros
    minZerosIndex = index
  }
})

console.log(`The number is ${layers[minZerosIndex].match(/1/g).length * layers[minZerosIndex].match(/2/g).length}.`)

let image = ''

for (var i = 0; i < width * height; i++) {
  if (!(i % width)) {
    image += '\n'
  }

  for (layer of layers) {
    if (['0', '1'].includes(layer[i])) {
      image += parseInt(layer[i]) ? String.fromCharCode(9608) : ' '
      break
    }
  }
}

console.log(`The message is:${image}`)
