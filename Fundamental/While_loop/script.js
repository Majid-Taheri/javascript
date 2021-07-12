for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;

while (rep <= 10) {
    console.log(`Lifting weights repetion ${rep} 🏋️`);
    rep++;
}

//Role a dice and keep running the dice untile we have the dice

let dice = Math.random() ;
console.log(dice);

dice = Math.trunc(Math.random() * 6) +1;

console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}