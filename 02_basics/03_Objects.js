 // singleton 
 // object.create

 // while creating object using object using object leteral , singleton not created
 // on the other hand , when created by constructor , its singleton

 // object literals

const mySym = Symbol("key1")



 const JsUser = {
    name: "Tanishk",
    "full name": "Tanishk Rajak",
    [mySym]: "myKey1",
    "course": "BCA",
    "marks": 9.13,
    "age": 20,
    "subjects": ["Python", "Operating System", "JAVA"]
 }

 console.log(JsUser.name);
 console.log(JsUser["marks"]);
 
//  console.log(JsUser.full name); cannot acces using this cuz key has a space in it
 console.log(JsUser["full name"]);
 console.log(JsUser[mySym]);
 console.log(typeof(JsUser[mySym]));

 JsUser.marks = 9.155;
 // Object.freeze(JsUser)
 JsUser.marks = 7.155;

 console.log(JsUser);

 // function in js can be treated as normal variable.
 
 JsUser.greeting = function(){
    console.log(`Hello js user ${this.name}`);
 }

 console.log(JsUser.greeting);
 console.log(JsUser.greeting());

 



