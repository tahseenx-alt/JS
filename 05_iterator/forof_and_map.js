

// for of 
 const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const greeting = "hello world"
for (const greet of greeting) {
   console.log(`each char is ${greet}`);
}

Maps 

const map = new Map()
map.set('IN',"India")
map.set('USA',"United state of America")
map.set('fr',"France")

// console.log(map);


for (const [key, value] of map) {
    console.log(key, ':-',value);
    
}

const myobject = {
    Game1: 'NFS',
    Game2: 'Spiderman' 
}
for (const [key,value] of myobject) {
    console.log(key, ':-' ,value);
    // object is not iterable 
}

