//let myName = "Tanishk       "


//console.log(myName.trim().length);

//console.log(myName.truelength);  // difference b/w property and method



let myHeros = ["iroman", "spiderman"]

let heroPower = {
    ironman: "intelligence",
    spiderman: "web",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.tanishk = function(){
    console.log(`Tanishk is present in all objects ${this}`);
}

Array.prototype.heyTanishk = function(){
    console.log(`Tanishk says hello`);
}


//heroPower.tanishk()
myHeros.tanishk()

myHeros.heyTanishk()
// eroPower.heyTanishk();


// inheritance

const User = {
    name: "Tanishk",
    email: "ashu@2025"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User ;


// modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher);


let anotherUsername = "JavaScript      "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);

}

anotherUsername.trueLength()
"Abhishek".trueLength()
"Tanuj".trueLength()