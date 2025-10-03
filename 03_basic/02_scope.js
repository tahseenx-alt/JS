let a = 300

if (true) {
    let a =10
   const b =20
    //var c = 30
   console.log("inner : ", a);
   
}


console.log(a); 
//console.log(b);  
// console.log(c);   it will print value of c


// nested scope
function one(){
   const  username= "Tahseen"
    
   function two(){
    const website = "youtube"
    console.log(username); // here you can access from function on e
   }
   //console.log(website);  you can not access from function two
   
   two()
}
one()

if(true){
    const username = "Tahseen "
    if(username === " Tahseen "){
        const website = " youtube"
        console.log(username + website);      
    } 
    //console.log(website); it give you error 
    
}

//    console.log(username);  it give you error


// +++++++++++++++++++interesting++++++++++++++++

function addone(num1){
   return num1+1
}
const addtwo = function(num){
    return num+2
}