function name() {
    console.log("T");
    console.log("a");
    console.log("h");
    console.log("s");
    console.log("e");
    console.log("e");
    console.log("n");   
}
name()

function addTwoNumber( number1, number2) {
    //console.log(number1+number2);
    return number1 + number2
    
} 
const result = addTwoNumber(3 , 5)
console.log("Result:" ,result);

function loggedInusserName(username){
    if (username === undefined) {
        return 
    }
    return`${username} just logged in`
}
console.log(loggedInusserName());


//to take more and more arrgument 
function calucatecartprice(...num1){  // ... this help to combine all argument in one array
    return num1
}
console.log(calucatecartprice(200,400,600));

const user = {
    username:"Tahseen",
    price:199
}
function Calculate(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
Calculate(user)

const newarray = [2000,4000,6000]

function returnarraysecondvalue(getarray){
    return  getarray[1]
}
console.log(returnarraysecondvalue(newarray));



