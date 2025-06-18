// Immediately Invoked Function Expressions (IIFE)

(function dbconn(){
    // named IIFE
    console.log(`DB connected`);
})();

// FIRST BLOCK THIS CONTAIN THE DEFINATION AND SECOND WILL EXECUTE IT

( () => {
    // simple IIFE
    console.log(`DB connected 2`);
})();