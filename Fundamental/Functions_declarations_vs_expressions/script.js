// Function declaration
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
}
const age1 = calcAge1(1989);
  
  // Function expression
  const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}
const age2 = calcAge2(1989);
  
console.log(age1, age2);
  

const x = function (y) {
    return y+1;
}

console.log (x (12));