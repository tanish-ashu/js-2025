class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    createId(){
        return `2221`
    }
}

const tanishk = new User("tanishk");
console.log(tanishk.createId())


class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const abhishek = new Teacher('abhishek', 'abhishek@gmail.com')

abhishek.logMe();
console.log(abhishek.createId());



