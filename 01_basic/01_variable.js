const accoutnID = 14567543
let accountemail = "tahseen@gamil.com"
var accountpassword = "12345"
accountcity = "patna"
let accountState

//accoutnID =    not allowed 
accountemail = "kaif@gmail.com"
accountpassword = "9876"
accountcity = "Bihar"

console.log(accoutnID);
console.log(accountemail);
console.log(accountpassword);
console.log(accountcity);

// another method to print

console.table([accountemail,accountpassword,accoutnID,accountcity,accountState])
/*
prefer not to use var
because of issue in block scope and functional scope
*/
