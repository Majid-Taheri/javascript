const majidArray = [
    'Majid',
    'Taheri',
    2037 - 1989,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const types =[];
for (let i=0; i <= majidArray.length; i++) {
    console.log(majidArray[i], typeof majidArray[i]);
    types.push(typeof majidArray[i]);
}

console.log(types);