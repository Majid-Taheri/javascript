const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95

const markBMI =  markWeight/(markHeight*markHeight);
console.log(markBMI)
const johnBMI = johnWeight / (johnHeight**2);
console.log(markBMI, johnBMI)

const markHighBmi = markBMI > johnHeight;
console.log(markBMI,johnBMI,markHighBmi);