let a = 44;
const b = 33;
var c = 22;

// var does not follow scope properly

// ==========================

function one(){
    const username = "tanishk";

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two();
}

one()



// you can say this one 'function'
function addOne(num1){
    return num1+1
}

addOne(5);

// you can say this one 'function' / 'expression'.

// this type of declaration you cannot call, the function before its declearation.
const addTwo = function(num){
    return num + 2
}

addTwo(5);



