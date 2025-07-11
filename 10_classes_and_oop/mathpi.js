const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(Math.PI);
// Math.PI = 5;

// console.log(Math.PI);

console.log(descripter);


// const mynewObject = Object.create(null)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai bina chain kaha re");
    }

}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));


Object.defineProperty(chai, 'name', {
    //writable: false,
    numerable: false,

})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`)    
    }
}