//*************************************
// stack and heap 
/*Primitive Types:
1. Stored in stack.
2. Passed or assigned by value (call by value).
3. Changes to copies don't affect the original.

Reference Types:
1. Stored in heap; accessed via references (stored in stack).
2. Changing the value through another reference affects the original. */

let youTubeName = "kaifmallick"
let anotherName = youTubeName
anotherName = "Tahseen Anwer"
console.log(youTubeName); // it can not change because it store in stack and give a copy of value
console.log(anotherName);


let personOne = {
    email : "Tahseenanwer@gmail.com",
    upi : "tah@ybl"
}

let personTwo = personOne
personTwo.email = "Kaifmallick@gmail.com"
console.log(personOne); // here it change because it store in heap , here it referance to the orginal value 
console.log(personTwo);

