//   Primitive

// 7 Catagories: String, Number, Boolearn, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = symbol('123')

console.log(id === anotherId)



// Reference (Non primitive)

// Arrays, Objects, Functions



const heros = ["shaktiman, naagraj, doga"]
let myObj = {
    name: "Yahya",
    age: 14,
}

const myFunction = function(){
     console.log("Hello World");
}

console.log(typeof bigNumber); 




// **************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "Yahyadotcom"

let anothername = myYoutubdname
anothername = "Yahya123"

console.log(anothername);
console.log(myYoutbename);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "yahya@google.com"

console.log(userOne.email);
console.log(userTwo.email);



