class User {
    constructor(username){
        this.username = username;
    }


    logMe(){
    console.log(`USERNAME IS  ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super()
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const tanishk = new Teacher("tanishk", "Ashu@2025", "123");

// console.log(tanishk.changeUsername);

tanishk.addCourse();

const admin = new User("Ashu")

admin.logMe();

console.log(admin === tanishk);
console.log(admin === Teacher);
console.log(admin instanceof Teacher);
console.log(admin instanceof User);
console.log(tanishk instanceof User);
console.log(tanishk instanceof Teacher);
