// Array

const myArray1  = [0,1, 2, 3 , 4, 5]
const myHero = ["kirsh", "poweranger"]

console.log(myArray1[0]);
console.log(myHero[0]);
 

// Array Methods 
const myArray2 = [1 ,2 , 3, 4, 5]

myArray2.push(6)// add a new array in the last 
myArray2.push(6)
myArray2.pop()   // remove last element of the last index

myArray2.unshift(9) // add element in the starting 
myArray2.shift() // remove



console.log(myArray2);
console.log(myArray2.indexOf(3));  // return the same index if it is there else give -1
console.log(myArray2.includes(9));  // check if the element in the array is there or not  return boolean type 

 const newArr = myArray1.join()

 console.log(myArray1);
 console.log( newArr); // it convert to string 

 // slice splice 
 const myArr =[ 1,2, 3, 4 ,5]
 console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);