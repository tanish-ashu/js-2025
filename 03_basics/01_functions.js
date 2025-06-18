function print(){
    for(i=0; i<10; i++){
    console.log('hello world');
    }
}

print();


function addTwoNumbers(number1, number2, number3){
    return number1 + number2 + number3;
}

//console.log(addTwoNumbers("tani",20, 40));

function loginUserMessage(username = "root"){
    if(username === undefined){
        console.log("please enter a username");
        return;
    }

    return `${username} just loggned in`;
}

// console.log(loginUserMessage("Tanishk")); // when nothing will be passed , it will be undefined
// console.log(loginUserMessage()); 


// ++++++++++++++++++++++++++++++++++++++

function calculateCartPrice(val1, val2, ...num1){ // '...' called rest and spread operator on different usecase (here rest operator)
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 600));

const user = {
    username: "tanish-ashu",
    id: 26
}

function handelObject(anyObject){
    console.log(`Usermae is ${anyObject.username} and id is ${anyObject.id}`)
}

handelObject(user);

function printArray(getArray){
    return getArray[1];
}

console.log(printArray([2,3,5,5]))



