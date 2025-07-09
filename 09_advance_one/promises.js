// consuming promise -> fetch('https://something.com').then().catch().finally()

// creating a promise

const promiseOne = new Promise(function(resolve, reject){
        // Do an async task
        // DB calls, cryptography, network
        console.log('Asynch task is complete');
        resolve()
}, 1000);

// consuming a promise

// .then is connection with resolve
promiseOne.then(function() {
    console.log('promise comsumed');
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Asynch task 2');
        resolve();
    }, 1000)
}).then( function() {
    console.log('Async 2 resolved');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Tanishk", email: "ashu2005rajak@gmail.com"}) // this shows how after fetching resolve tranfers the data to .then 
    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user); // the data obtained from resolve after promise complete
})


// promise 4 creation

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error) {
            resolve({username: "Tanishk", password: "123"})
        }else{
            reject('ERROR: Something Went Wrong');
        }
    },1000)
})

// promise 4 consuming

promiseFour
.then((user) =>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() => console.log("The Promie is Either Resolved or Rejected"));



// Creating Promise 5

const promiseFive = new Promise(function(resolve,reject) {
    setTimeout(function(){
        let error = true;
        if(!error) {
            resolve({username: "JavaScript", password: "123"})
        }else{
            reject('ERROR: JS Went Wrong');
        }
    },1000)
});
// trying to accept or handel using other method rather then .then or .catch
// promise is an object ?

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
    console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive()

async function getAllUsers(){
    try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            console.log(response);
            console.log(data);
    }catch(error){
        console.log("E:", error);
    }
}

//getAllUsers()

// same function in .then .catch instead of async

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> {
    return response.json()
})
.then((data)=>{
    console.log(data);
}) 
.catch((error) => console.log(error));
