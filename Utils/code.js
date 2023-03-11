var randomCode = require('random-number');
var randomNumber = require('random-number');

const getCode = () => {
    var options = {
        min:  10000, max:  99999, integer: true
      }
    
    return randomCode(options);
}

const getNumberId = () => {
  var options = {
      min:  100, max:  999, integer: true
    }
  
  return randomNumber(options);
}

const getNumberCategory = () => {
var options = {
    min:  10, max:  99, integer: true
  }

return randomNumber(options);
}

const getNumberTags = () => {
var options = {
    min:  1, max:  9, integer: true
  }

return randomNumber(options);
}

exports.getCode = getCode
exports.getNumberId = getNumberId
exports.getNumberCategory = getNumberCategory
exports.getNumberTags = getNumberTags