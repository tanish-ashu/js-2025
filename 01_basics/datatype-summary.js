// primitive

// 7 types : String, Number, Boolean, null, Undefined, Symbol, BigInt 


const score = 100;

const id = Symbol('123');
const anotherId = Symbol('123');

//console.log(id === anotherId);

const bigInt = 34634635n;
//console.log(typeof(bigInt));


// Non- Primitive or Reference 

// Array, Objects, Functions

const names = ["Tanishk", "abhishek", "Tanuj"];


let myObj = {
    name: "Tanishk",
    age: 20
};

//console.log(names);
//console.log(myObj);


const myFunction = function(){ 
    //console.log("this is a sample function");
}

//console.log(typeof( myFunction));


// ++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-Primitive)

let myName = "Tanishk Rajak";

let anotherName  = myName;

anotherName = "Ashu"

console.log(anotherName);
console.log(myName);

let user1 = {
    email: "ashu2005rajak@gmail.com",
    upi: "8817786102@ybl"
};

let user2 = user1;

console.log(user1,"\n" ,user2);

user2.email = "do not have email";

console.log(user1.email, "\n" ,user2.email);