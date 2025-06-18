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

console.log(loginUserMessage("Tanishk")); // when nothing will be passed , it will be undefined
console.log(loginUserMessage()); 