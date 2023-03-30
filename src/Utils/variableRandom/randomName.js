const randomName = require('node-random-name')

const getFirstName = () => {
  return randomName({ first: true })
}

const getLastName = () => {
  return randomName({ last: true })
}

const getFullName = () => {
  return randomName({ random: Math.random })
}

exports.getFirstName = getFirstName
exports.getLastName = getLastName
exports.getFullName = getFullName
