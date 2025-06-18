const user = {
    username: "Tanishk",
    price: 999,


    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);
    }
}

console.log(user.welcomeMessage());

console.log(this);

function chai(){
    console.log(this);
}

chai()

console.log("new function \n");

function coffie(){
    const type = "cappuccino";
    console.log(this.type);  // returning undefined , this 'this' is working with objects but not with the function
}

coffie(); 


// simple arrow function
const greetings = () => {
    console.log("hello coder");
}

console.log(greetings());

// implict return

const addNumber = (num1, num2) => ( num1 +num2 )


const newfunction = (num1, num2) => ( {username: "Tanishk"}  )

console.log(newfunction())

