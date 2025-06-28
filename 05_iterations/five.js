// we are currently going with **** ###  higher order array loops ##### *****.

const coding = [ "js", "ruby", "cpp", "java" ];


// using call back function in forEach for array    // 'forEach' asks for callback function ?
coding.forEach( function (item) {
    console.log(item);
} )


console.log("\n")
// using arrow function

coding.forEach( (item) => {
    console.log(item);
})

//
console.log("\n")

function printMe(item){
    console.log(item);
}

coding.forEach(printMe);  // we need to give reference 'functionname' not execute 'functionname()'



console.log("\n")


coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item);
    console.log(item.languageName);
})

// helps in database fatched data visualization in web.


