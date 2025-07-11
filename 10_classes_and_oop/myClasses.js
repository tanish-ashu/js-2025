// // all works happends with new keyword object etc... >> Syntaxtical sugar >> after ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }


//     encryptPassword(){
//     return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const Tanishk = new User("Tanishk", "Ashu@gmail.com", "123")

// console.log(Tanishk.encryptPassword());
// console.log(Tanishk.changeUsername());


// behind the Scene -------------------------------------------

function User(username,email, password){
    this.username = username,
    this.email = email,
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}
// revise here 'User' is a function , but used as a Object.

const tanishk = new User("Tanishk", "Tanishk@gmail.com", "123")

console.log(tanishk.encryptPassword());
console.log(tanishk.changeUsername());




