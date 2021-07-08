// Dot vs. Bracket Notation
const majid = {
    firstName: 'Majid',
    lastName: 'Taheri',
    age: 2037 - 1989,
    job: 'engineer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function (birthYear) { //we need a function expression for define method, we cannot do function declartion
        return 2037 - birthYear ;
    }

  };


console.log(majid.calcAge(1987));