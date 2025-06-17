const name = "Tanishk ";
const age = 20;

console.log(name + age + " Rajak");

// String interpretation 
console.log(`Hello my name is ${name} and my age is ${age} lastly my name surname is ${"rajak"}`);


const gameName = new String('GTA VI');

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("I"));

const newString = gameName.substring(0,2);
console.log(newString);

const anotherString = gameName.slice(-5,1)
console.log(anotherString);


const newStringOne = "      tanishk       ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://tanishk.com/tanishk%20rajak";

console.log(url.replace('%20', '-'));


console.log(url.includes('tani'));

console.log(gameName.split(' '));




