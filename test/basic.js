var test = require('tape')
var gcd = require('../index')

test('iterative gcd', function (t) {
  t.equal(gcd(17, 17), 17)  // a = b
  t.equal(gcd(83, 999), 1)  // a is prime
  t.equal(gcd(888, 83), 1)  // b is prime
  t.equal(gcd(30, 240), 30)  // b is multiple of a
  t.equal(gcd(1406700, 164115), 23445)
  t.equal(gcd(1368, 339), 3)
  t.equal(gcd(55534, 434334), 2)
  t.equal(gcd(0, 243532), 243532) // a is zero
  t.equal(gcd(243532, 0), 243532) // b is zero
  t.equal(gcd(37279462087332, 366983722766), 564958)

  t.end()
})
