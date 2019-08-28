/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
  let clonedObj = {};

  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      clonedObj[key] = clone(obj[key]);
    } else {
      clonedObj[key] = obj[key];
    }
  }

  return clonedObj;
}