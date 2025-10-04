

// truthy.js

const useremail = "T@hseen.ai"

if (useremail) {
    console.log("Got the user email");
    
} else {
    console.log("Dont have user email");
    
}

// falsy values
// false , 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy value
// true , 1, [] , "0" 'false',{},function(){}

const empthobj = {}

if (Object.keys(empthobj).length === 0) {
    console.log("Object is empty");
    
}

// Nullish coalescing operator (??) : null undefined

let val1
val1 = 5 ?? 10
val1 = null ?? 10
let val2
val2 = undefined ?? 15 ?? 10
console.log(val1);
console.log(val2);


// Terniary operator 

//condition ? true : false
const iceteaprice = 100
 iceteaprice <= 80 ? console.log("less than 80 ") : console.log(" more than 80");
 
 