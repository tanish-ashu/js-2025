let myDate = new Date();
// console.log(myDate.toLocaleString());




let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate);
// console.log(myCreatedDate.toString());

let myCreatedDate2 = new Date("2025-06-18");
// console.log(myCreatedDate2);

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
    
})

