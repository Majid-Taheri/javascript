const majid = [
    'Majid',
    'Taheri',
    2037 - 1989,
    'engineer',
    ['Michael', 'Peter', 'Steven']
];

for (let i = majid.length-1; i>=0 ; i--){
    console.log(i,majid[i]);
}


for (let exercise = 1 ; exercise <= 4; exercise++){
    console.log(`-------- Starting exercise ${exercise}`);
    for (let repeat = 1; repeat <= 6; repeat++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${repeat} 🏋️‍♀️`);
    }
}

for (i in majid) {
    console.error(`majid ${i}`);
}