const coding = ['js','ruby','java','cpp','python']

// foreach does not return any value 
const values =  coding.forEach((item)=>{
             console.log(item);
             return item
})
console.log(values); // inboth case it give undefined 


 const myNums =[1,2,3,4,5,6,7,8,9,10]
 //filter can return values or soon
const newNums =  myNums.filter((num)=>{
   return num>4    
 })
console.log(newNums)

// amother method without using filter
const myNums2 =[]
myNums2.forEach((num)=>{
    if (num>4) {
        newNums.push(num)
    }
})
console.log(newNums);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
//one line code 
 //if you use curly bracket then you have to return else it give error
 const userBooks = books.filter((bk)=>bk.genre === 'History')
  console.log(userBooks);
 const BookYear = books.filter((yy)=>{
    return yy.publish>=1995 && yy.genre === 'History'
 })
  console.log(BookYear);
  
  


const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newnum1 = myNumbers.map((num)=>{
  return num +10
})
console.log(newnum1);

// chaining

const newNums2 = myNumbers
.map((num)=> num*10)
.map((num)=> num+1)
.filter((num)=> num>=40)

console.log(newNums2);




//  reduce
// acc :-> accumulator
// currval:-> current value
// reduce using function 
 const array1 = [1,2,3]
const sum = array1.reduce(function (acc,currval){
    console.log(`acc:${acc} and currval ${currval}`);
    
    return acc + currval
},0)  // accumulator value (acc value)

console.log(sum);


// reduce using arroe function

const myTotal = array1.reduce((acc,curr)=> acc+curr,0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "mobile course",
        price : 5999
    },
    {
        itemName : "data science course",
        price : 12999
    },

]

const total = shoppingCart.reduce((acc,item)=>acc +item.price, 0)

console.log(`Total price to pay ${total}`);
