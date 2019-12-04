function validatePassword (password) {
  password = password.toString()

  return it_is_a_six_digit_number(password) &&
    two_adjacent_digits_are_the_same(password) &&
    digits_never_decrease(password) &&
    the_two_adjacent_matching_digits_are_not_part_of_a_larger_group_of_matching_digits(password)
}

function it_is_a_six_digit_number (password) {
  return password.length == 6
}

function two_adjacent_digits_are_the_same (password) {
  for (var i = 0; i < password.length - 1; i++) {
    if (password.charAt(i) == password.charAt(i + 1)) {
      return true
    }
  }

  return false
}

function digits_never_decrease (password) {
  for (var i = 0; i < password.length - 1; i++) {
    if (password.charAt(i) > password.charAt(i + 1)) {
      return false
    }
  }

  return true
}

function the_two_adjacent_matching_digits_are_not_part_of_a_larger_group_of_matching_digits (password) {
  for (var i = 0; i < password.length - 1; i++) {
    if (
      password.charAt(i) == password.charAt(i + 1) &&
      password.charAt(i) != password.charAt(i - 1) &&
      password.charAt(i) != password.charAt(i + 2)
    ) {
      return true
    }
  }

  return false
}

exports.validatePassword = validatePassword
