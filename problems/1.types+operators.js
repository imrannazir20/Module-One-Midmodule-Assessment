/** Takes in an value and returns if it is a number
* @param {any} val - The input value
* @returns {boolean} - Is val a number
*/
function isNumber(value) {
  
  return typeof(value) ==="number"
}

/** Takes in a value and returns whether it is truthy
* @param {any} val - The input value
* @returns {boolean} - Is val truthy
*/
function isTruthy(val) {
  return Boolean(val)
}


module.exports = {
  isNumber,
  isTruthy
}
