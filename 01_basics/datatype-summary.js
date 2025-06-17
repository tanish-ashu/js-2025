// primitive

// 7 types : String, Number, Boolean, null, Undefined, Symbol, BigInt 


const score = 100;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigInt = 34634635n;
console.log(typeof(bigInt));


// Non- Primitive or Reference 

// Array, Objects, Functions

const names = ["Tanishk", "abhishek", "Tanuj"];


let myObj = {
    name: "Tanishk",
    age: 20
};

console.log(names);
console.log(myObj);


const myFunction = function(){
    console.log("this is a sample function");
}

console.log(typeof( myFunction));