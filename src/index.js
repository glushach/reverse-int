module.exports = function reverse (n) {
  const str = String(n);

  if (n > 0) {
      return str.split('').reverse().join('')
  } else {
      return str.split('').slice(1).reverse().join('')
  }

}
