// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];


console.log(`temperature is ${temperatures}`);

for (temps in temperatures) {
    // console.error(temps);
    if (temperatures[temps] === 'error') {
        console.log(temps);
        temperatures.splice(temps , 1);
    }
}

console.log(`temperature is ${temperatures}`);


let max = 0;

for (let item =0 ; item < temperatures.length; item++){
    if (temperatures[item] > max) {
        max = temperatures[item];
    }
}

console.log(max)

max = 0;

for ( item in temperatures) {
    if (temperatures[item] > max) {
        max = temperatures[item];
    }
}

console.log(max);


let min = max;

for (item in temperatures) {
    if (min > temperatures[item]) {
        min = temperatures[item];
    }
}

console.log(min);

const amplitude = max - min;

console.log(min, max, amplitude);