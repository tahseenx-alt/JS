// object literals 

const mysym = Symbol("key1") 

const jsuser = {
   name : "Tahseen ",
   "full name": "Tahseen Anwer",
   [mysym] : "mykey1",
    age : 18,
    email: "tahseen@gmail.com",
    isloggedin: false,
    location : "Bangaluru",
    lastLoggedDays : ["Monday","Tuesday"]
}
console.log(jsuser.name);
console.log(jsuser.email);
console.log(jsuser[mysym]);
console.log(jsuser["full name"]);

jsuser.email = "Tahseen@google.com"
console.log(jsuser.email);
//Object.freeze(jsuser) // it is used to locked the data
jsuser.email = "Tahseen@chatgpt.com"
console.log(jsuser.email);

jsuser.greeting1= function(){
   console.log("heloo js user");
   
}

jsuser.greeting2= function(){
   console.log(`heloo js user ${this["full name"]} `);
   
}
console.log(jsuser.greeting1());
console.log(jsuser.greeting2());
