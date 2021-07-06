// Introduction to Arrays
const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

//mutate array
friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'] //we cannot do this it's illegal

const firstName = 'Majid';
const majid = [firstName, 'Schmedtmann', 2037 - 1989, 'engineer', friends];
console.log(majid);
console.log(majid.length);

// Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }

// function calcAge (birthYear) {
//     return 2037 - birthYear;
//   }

const calcAge = birthYear => 2037 - birthYear;

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
