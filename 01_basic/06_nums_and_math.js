const score = 23;
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString()); // convert to string
console.log(balance.toFixed(1));  // add decimal 

const otherNumber  = 123.8966
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString(`en-IN`)); // add comma inside en-IN to conver to indian region 


//+++++++++++++ Math +++++++++++++
console.log(Math);
console.log(Math.abs(-4))  //convert  negative to positive 
console.log(Math.round(5.68));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.4));
console.log(Math.min(3 , 4, 1 , 2));
console.log(Math.max(1, 2,3, 4,5, 9));


console.log(Math.random());
console.log((Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);

