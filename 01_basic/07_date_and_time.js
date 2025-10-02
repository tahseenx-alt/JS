// Dates 
let myDates = new Date()
console.log(myDates);
console.log(myDates.toString());
console.log(myDates.toDateString());
console.log(myDates.toISOString());
console.log(myDates.toJSON());
console.log(myDates.toLocaleDateString());
console.log(myDates.toLocaleTimeString());

let createdMyDate1 = new Date(2025,0,24)  // here month satrt from 0
let createdMyDate2 = new Date(2025,0,24,5,3)  // here month satrt from 0
let createdMyDate3 = new Date("01-23-2024") // here month satrt from 1
console.log(createdMyDate1.toString());
console.log(createdMyDate2.toString());
console.log(createdMyDate3.toLocaleString());

let myTimeStamp =  Date.now()
console.log(myTimeStamp);
console.log(createdMyDate1.getTime());
console.log(Math.floor(Date.now()/1000));


let newdate = new Date()
console.log(newdate);
console.log(newdate.getDay());
console.log(newdate.getMonth()+1);

newdate.toLocaleString('default',{
    weekday : 'long',

})

