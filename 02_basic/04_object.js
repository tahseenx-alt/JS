// const tinderuser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Tahseen"
tinderUser.isloggedIn = false

console.log(tinderUser);

const regularUse ={
   email : "Tahseen@gmail.com",
   fullname : {
      username : {
         firstName : "Tahseen ",
         LastName : "Anwer"
      }
   }
}

console.log(regularUse.fullname.username.LastName);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

const obj3 = Object.assign({}, obj1,obj2,obj4)
console.log(obj3);

const User =[
   {
      id :1,
      email:"tahseen787@gmail.com"
   },
   {
      id :2,
      email:"tahseen87@gmail.com"
   },
   {
      id :3,
      email:"tahseen7@gmail.com"
   }
]

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isloggedIn'));


const course = {
   coursename: "js in hindi",
   price: "999",
   courseInstructor:"Tahseen"
}

const {courseInstructor} =course
console.log(courseInstructor);

