// for of ( array specific loop)

["", "", ""];

[ {}, {}, {}];


const arr = [1,2,3,4,5];

// for(const iterator of object){

// }

for (const num of arr ){
    console.log(num);
}

const greetings = "hello World!";

for(const greet of greetings){
    console.log(`Each char is ${greet}`);
}


// Maps   ---> TAKES UNIQUE VALUES AND KEEPS IN STORED ORDER , also they are not iteratable

const map = new Map();

map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");

console.log(map);

for( const [key, value] of map) {      // this method is called de-structuring of array
    console.log(key, ':-', value);
}

const myObject = {
    'game1' : 'NFS',
    'game2': 'spiderman'
}

// for( const [key, value] of myObject){  // objects are not iteratable this way
    // console.log(key, ':-', value);
// } 
// 
