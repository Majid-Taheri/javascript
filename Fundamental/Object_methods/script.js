// Dot vs. Bracket Notation
const majid = {
    firstName: 'Majid',
    lastName: 'Taheri',
    birthYear:  1989,
    job: 'engineer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,

    // calcAge: function (birthYear) { //we need a function expression for define method, we cannot do function declartion
    //     return 2037 - birthYear ;
    // },

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // },
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.age}-year old engineer, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license. `
    }
  };


// console.log(majid.calcAge(1981));
// console.log(majid['calcAge'](1981));

console.log(majid.calcAge());
// console.log(majid['calcAge']());
console.log(majid.age);
console.log(majid.age);
console.log(majid.getSummary());

// Challenge
// "Majid is a 46-year old engineer, and he has a driver's license"