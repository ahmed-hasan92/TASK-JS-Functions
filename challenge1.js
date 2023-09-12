/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printName(myName) {
  return `Greetings ${myName}`;
}
console.log(printName("Ahmed"));

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge(birthYear) {
  let currentYear = 2023;
  return currentYear - birthYear;
}
console.log(printAge(1992));
/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name, language) {
  if (language === "en") return `Hello ${name}`;
  else if (language === "es") return `Hole ${name}`;
  else if (language === "fr") return `Bonjour ${name}`;
  else if (language === "tr") return `Merhaba ${name}`;
}
console.log(printHello("Ahmed", "fr"));

/* Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(numberOne, numberTwo) {
  if (numberOne > numberTwo) return numberOne;
  else return numberTwo;
}
console.log(printMax(70, 50));
