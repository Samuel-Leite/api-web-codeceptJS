const randomCode = require('random-number')
const randomNumber = require('random-number')

const getCode = () => {
  const options = {
    min: 10000,
    max: 99999,
    integer: true
  }

  return randomCode(options)
}

const getNumberId = () => {
  const options = {
    min: 100,
    max: 999,
    integer: true
  }

  return randomNumber(options)
}

const getNumberCategory = () => {
  const options = {
    min: 10,
    max: 99,
    integer: true
  }

  return randomNumber(options)
}

const getNumberTags = () => {
  const options = {
    min: 1,
    max: 9,
    integer: true
  }

  return randomNumber(options)
}

exports.getCode = getCode
exports.getNumberId = getNumberId
exports.getNumberCategory = getNumberCategory
exports.getNumberTags = getNumberTags
