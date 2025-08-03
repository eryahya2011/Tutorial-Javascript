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

// Datatype for all non-primitive is Function; and datatype of Function is said object function. <-- Important for Interview perspective. 


const heros = ["shaktiman, naagraj, doga"]
let myObj = {
    name: "Yahya",
    age: 14,
} // Curly braces {} mai jitne bhi value hai vo Object hai..
 
// Data type can be anything  --> String, Boolearn, Number, Function, Array, Another Object also, and etc. 



const myFunction = function(){
     console.log("Hello World");
}

console.log(typeof bigNumber);  // Use typeof to find datatype of variable. 




// **************************************

// Stack (Primitive), Heap (Non-Primitive)     <------ Type of Memories.

// Stack Memory --> We get a copy.
// Heap Memory --> Changes are also changed in original copy.

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



// Datatype for null will be shown as Object..   <-- Important for interview perspective.