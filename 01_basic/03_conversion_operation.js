// value of score is in string
let score1 = "33"
console.log(typeof score1);
console.log(typeof (score1));

// we are now converting string to number;
let valueInNumber1 = Number(score1)
console.log( typeof valueInNumber1);

// what if some on write  this score = "33abc"
let score2 = "33abc"
let valueInNumber2 = Number(score2)
// here it convert to number but what is the ouput 
console.log( typeof valueInNumber2);
//seeing the 

console.log(valueInNumber2);// it is given me NaN means not a value , it is imporatnt to check 

// what if someone write score = null
let score3 = null;
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3); //it is given me number 
console.log(valueInNumber3); // output is 0

// what if someone write score = undefined
let score4 = undefined;
let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4); //it is given me number 
console.log(valueInNumber4); // output is NaN

//is someone write boolean
let score5 = true;
let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5); //it is given me number 
console.log(valueInNumber5); // output is 1 or for false it is zero

//number to boolean 
let isLoggedIn = "1"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// here all the out come
//1 => True / 0=>false
// "" => false
// "tahseen" =>true


//number to string
let SomeNumber = 33;
let stringNumber = String(SomeNumber);
console.log(typeof stringNumber);
console.log(stringNumber);
