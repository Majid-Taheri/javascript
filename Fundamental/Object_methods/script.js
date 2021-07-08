// Dot vs. Bracket Notation
const majid = {
    firstName: 'Majid',
    lastName: 'Taheri',
    birthYear:  1989,
    job: 'engineer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) { //we need a function expression for define method, we cannot do function declartion
    //     return 2037 - birthYear ;
    // },

    calcAge: function () {
        console.log(this);
        return 2037 - this.birthYear;
    }
  };


// console.log(majid.calcAge(1981));
// console.log(majid['calcAge'](1981));

console.log(majid.calcAge());
console.log(majid['calcAge']());