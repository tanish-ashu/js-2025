// for 

for(let i = 1; i<=10; i++){
    if(i ==5){
        continue;
    }
    const element = i;
     console.log(i);
}

for(let i = 0; i<10; i++){
    console.log(`\nTable of ${i+1} \n`);

    for(let j= 0; j<10; j++){
        //console.log(`inner loop number ${j}`);
        console.log(`${i+1} * ${j+1} = ${(i+1)*(j+1)} \n`);
    }
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for(let index =0; index<myArray.length; index++){
    console.log(myArray[index]);
}

// break and continue