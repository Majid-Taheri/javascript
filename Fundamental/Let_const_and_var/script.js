// mutate variable
let age = 30;
age = 31;

// not suppose to change at any point in future immutable variable
const birthYear = 1991;
// birthYear = 1990; //doesnot work
// const job; missiing initializer for const variable doesn't work

// do not use var because it's just legacy
var job = 'programmer';
job = 'teacher';