module.exports = function gcd (a, b) {
  var t
  while (b !== 0) {
    t = a % b
    a = b
    b = t
  }
  return a
}
