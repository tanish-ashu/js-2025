function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");

}


function createUser(username, email, password){

    SetUsername(username) // this only gives the reference not call it.  (executes and delete its reference next line will execute and hold it too.)
    SetUsername.call(this, username) // the .call method explictly calls in js to do the outscorce work here. 
    // the conext of the setUsername function gets deleted that's why shared own context 'this' to say place the change here instext of your own "this".

    this.email = email
    this.password = password;
}

const chai = new createUser("Tanishk", "tanishk@gmaiil.com", "123")

console.log(chai);