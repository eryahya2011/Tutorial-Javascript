// +++++++++++++++++++++++++++++++  Array  ++++++++++++++++++++++++++++++++ 
// It as an object.
// A simple programming language in which we put collection of multiple items in a single variable.
// Array of JS are re-sizeable
// It can consist mix datatypes
// They cannot be accesed by arbitary string.
// Its indexing starts from 0
// It make shallow copies.

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

// myArr.push(6)
//myArr.push(8)
//myArr.pop(5)

myArr.unshift(4)
myArr.shift(4)

//console.log(myArr.includes(8));
//console.log(myArr.indexOf(9)); // If the give thing is not in the data so the outcome will come in -1 which means that the given thing is not there.

//const newArr = myArr.join(); // By using this the type of the given thing will change which can be seen by using "typeOf"

//console.log(typeof newArr);

//console.log(myArr);
//console.log(newArr);



// ++++++++++++++++++++++++++++++  Slice & Splice  +++++++++++++++++++++++++++++++

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);
