const firstName = 'Majid';
const job = 'engineer';
const birthYear = 1989;
const year = 2037;

const majid = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(majid);

// template literals

const majidNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(majidNew);