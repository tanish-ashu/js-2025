const tinderUser = new Object()  // this is singleton object decleration
const tinderUser2 = {}           // this is non-singleton object decleration


tinderUser.id = "26hx"
tinderUser.name = "Ashu"
tinderUser.isLoggedIn = false


console.log(tinderUser);
console.log(tinderUser2);

const regularUser = {
    email: "ashu2005rajak@gmail.com",
    fullname: {
        userfullname: {
            firstname: "tanishk",
            lastname: "rajak"
        }
    }
};

console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = { obj1, obj2};
console.log(obj3);

const obj4 = Object.assign({},obj1,obj2);  // returns a modified target object from copying objects/enumerable own properties
console.log(obj4);


// mostly used
const obj5 = {...obj1, ...obj2}; 
console.log(obj5);

// used when values comes from the database.

const users = [
    {
        id: 1,
        email: "1@gmail.com"
    },
    {

    },
    {

    }
] // array of objects


console.log(users[0].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));