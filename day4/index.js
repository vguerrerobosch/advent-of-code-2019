const { validatePassword } = require('./validatePassword')

const start = 136818
const end = 685979

let validPasswords = []

for (var i = start; i <= end; i++) {
  if (validatePassword(i)) {
    validPasswords.push(i)
  }
}

console.log(`Total valid passwords: ${validPasswords.length}`)
