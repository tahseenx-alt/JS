const user = {
     username : " tahseen ",
     price :999,
     welcomepage : function(){
        console.log(`${this.username},Welcome to website `);
        console.log(this);
        
     }
}

user.welcomepage()
user.username = "Sam"
user.welcomepage()

console.log(this);// it will print empty curly bracket 

function chai1(){
    let username = "Tahseen"
      console.log(this.username); // it will not print any value it give undefined 
      
   // console.log(this);  // it will give many value inside the function 
    
}
chai1()

const chai2 = function(){
    let username = "Tahseen"
      console.log(this.username);  //it will not print any value it give undefined 
      
}
chai2()

const chai3 = () =>{
    let username = "Tahseen"
      console.log(this.username);  //it will not print any value it give undefined 
      console.log(this); // it will give empty curly bracket 
      
      
}
chai3()
// basic arrow function or explicit return 
// if you will use curley bracket then you have to write return 
const addtwo1 = (num1, num2)=>{
      return num1+num2
}
// implicit return 
// if you dont use curley bracket then you does not have to write return
const addtwo2 = (num1, num2)=> num1+num2

// object return 
const addtwo3 = (num1, num2)=> ({username : "Tahseen "})


console.log(addtwo1(3,5));
console.log(addtwo2(3,5));
console.log(addtwo3(3,5));

