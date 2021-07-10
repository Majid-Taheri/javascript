const majidArray = [
    'Majid',
    'Taheri',
    2037 - 1989,
    'engineer',
    ['Michael', 'Peter', 'Steven']
];

const types =[];
for (let i=0; i <= majidArray.length; i++) {
    console.log(majidArray[i], typeof majidArray[i]);
    types.push(typeof majidArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break

for (let i=0; i <= majidArray.length; i++) {
    if (typeof majidArray[i] !== 'string' ) continue;
    console.log(majidArray[i] , typeof majidArray[i]);
}

for (let i=0; i <= majidArray.length; i++) {
    if (typeof majidArray[i] === 'number' ) break;
    console.log(majidArray[i] , typeof majidArray[i]);
}