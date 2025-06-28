const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'

}

for (const key in myObject){
    console.log(key);
    console.log(`${myObject[key]}`);
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

/* this is the way to use ....... for of ....... for in ..... loop in Object 

we got to know that the 'for of' loop takes
directly iterators the value but the 'for in' take 
the key so we need to print it in differnt way

this is also the way why objects are created becouse the default key in array start from 0
and are number where as in objects it can be any. 
*/

// trying for array

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming){
    console.log(programming[key]);
} 


// SUMMARY - for array we can use 'for of' loop, for objects we can use 'for in' loop.