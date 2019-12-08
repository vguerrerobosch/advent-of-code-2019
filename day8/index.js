const fs = require('fs')

let input = fs.readFileSync(`${__dirname}/input.txt`).toString().trim()

const width = 25
const height = 6

const layers = input.match(new RegExp(`.{1,${width * height}}`, 'g'))

let layerZeros
let minZeros = width * height
let minZerosIndex

layers.forEach((layer, index) => {
  layerZeros = layer.match(/0/g).length
  if (layerZeros < minZeros) {
    minZeros = layerZeros
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
