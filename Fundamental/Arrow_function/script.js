
// Function expression
const calcAge1 = function (birthYear) {
  return 2037 - birthYear;
}
const age = calcAge1(1989);
console.log(age);

// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age1 = calcAge3(1989);
console.log(age1);

const yearUntilRetirement = birthYear => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
}

console.log(yearUntilRetirement(1989));

const yearsUntilRetirement = (birthYear, lastNAme) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${lastNAme} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1989,'Taheri'));console.log(yearsUntilRetirement(1980, 'Bob'));