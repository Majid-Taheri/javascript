
// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age = calcAge2(1989);
console.log(age);

// Arrow Function
const calcAge3 = birthYeah => 2037 - birthYeah;
const age1 = calcAge3(1989);
console.log(age1);

