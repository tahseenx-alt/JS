
   // if condition 
const temperature = 41;
if (temperature  === 41) {
    console.log("less than 50");
    
} else {
    console.log("greater that 50");
    
}

const score = 200;
if (score <201) {
    let power  = "fly"
    console.log(`less than 200 ${power}`);
    
}
// it will give error because power is defined inside the if 
// you can used outside the if , we can use outside if we use var 
//console.log(`less than 200 ${power}`); 

//nested if

const balance  =1000;

if (balance<500) {
    console.log("less than 500");
    
} 
else if(balance<700)
{
    console.log("lessthan 700");
}
else{
    console.log("greater");
    
}

const userloggedIn = true
const debitcard = true
const loggedInFromGoogle =false
const loggedInFromemail = true
if (userloggedIn && debitcard) {
    console.log("Allow to buy course ");
    
}

if (loggedInFromGoogle || loggedInFromemail) {
    console.log("Logged in");
    
}


