/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */

let number = prompt('Enter a number', '0');
let power = prompt('Exponentiation in?', '0');

function pow(m, n) {
  let result = m;

  if (n === 1) return m;

  for(let i = 2; i <= n; i++) {
    result *= m;
  }
  return result;
}