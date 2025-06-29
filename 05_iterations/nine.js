// reduce in js 

const myNums = [1,2,3,4,5];

const initialValue = 0;

const myTotal = myNums.reduce( function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
}, 0 )

const myTotal2 = myNums.reduce( (acc, curr) => acc+curr, 0);

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science",
        price: 12999
    }
];



const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0);

console.log(priceToPay);