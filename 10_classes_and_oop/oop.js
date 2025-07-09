const user = {
    username: "Tanishk",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user Details from database!");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);


const promiseOne = new Promise(()=> console.log("callback"))
const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log("Welcome to javaScript World");
    }

    return this
}

const userOne = User("Tanishk",12,true)
const userTwo = User("Ashu" , 12, true)


console.log(userTwo);
console.log(userOne.constructor);

// Search instanceOf in js 
