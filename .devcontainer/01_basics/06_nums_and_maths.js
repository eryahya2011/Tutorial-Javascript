const score = 400 
console.log(score)

const balance = new Number(100)
console.log(balance);

console.log(balance.toString()).lenght;
console.log(balance.toFixed(2)); 

const otherNumber = 1123.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) 

// +++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4)); // In abs -ve becomes +ve but +ve remains +ve.
console.log(Math.round(4.5));

console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Very Important