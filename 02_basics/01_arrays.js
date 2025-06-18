  // array

  const myArr = [0,1,2,3,4,5];
  console.log(myArr);
  console.log(myArr[1]);

  const newArr2 = new Array(1,2,3,4,5);
  console.log(myArr[1]);

  // copy  operation on array creates a shallow copy

  // Array methods
  myArr.push(10);
  console.log(myArr);
  myArr.pop();
  console.log(myArr);

  myArr.unshift(9);
  console.log(myArr);

  myArr.shift();
  console.log(myArr);

  console.log(myArr.includes(9));
  console.log(myArr.indexOf(3));

  const newArr = myArr.join()  // Adds all the element of an array into a string , seperated by an special object
  console.log(myArr);
  console.log(newArr);
  console.log(typeof(newArr));

  // slice, splice

  console.log('A ', myArr);

  const myn1 = myArr.slice(1,3)

  console.log(myn1);
  console.log('B ', myArr);

   const myn2 = myArr.splice(1,3)
     console.log('C ', myArr);
   console.log(myn2);


