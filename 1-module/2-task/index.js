/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */

// variant 1
// function isValid(name) {
//   if (!name || name.includes(' ') || name.length < 4) return false;

//   return true;
// }

// variant 2
function isValid(name) {
  return (!!name && !name.includes(' ') && name.length >= 4);
}

function sayHello() {
  const userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}