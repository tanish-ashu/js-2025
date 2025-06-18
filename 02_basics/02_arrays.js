const marvel_heros = [ "Thor", "IronMan", "Spiderman"];
const dc_heros = ["batman", "Aquaman", "Flash", "Wonderwomen"];

//marvel_heros.push(dc_heros);

console.log(marvel_heros);
//console.log(marvel_heros[3][3]);

const heros = marvel_heros.concat(dc_heros); // combines two or more arrays , this method returns a new array
console.log(heros);

const all_new_heros =  [...marvel_heros, ...dc_heros]  // new preffered method ... scattered method

console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6],7, [6,7, [4,5]]];

const real_another_array = another_array.flat(Infinity);   // provide depth insted of infinity.

console.log(real_another_array);  // spread out the array from mixed t single array.


console.log(Array.isArray("Tanishk"));
console.log(Array.from("Tanishk"));   // converts to array from the provided value, content

console.log(Array.from({name: "hitesh"}));  // INTERESTING 
// we had to tell weather to make arrays from the keys or from the values else will return empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));




