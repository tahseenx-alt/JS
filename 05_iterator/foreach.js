

const coding = ["js", "ruby", "java" , "python", "cpp"]
 
// for each 
coding.forEach( function (item){
    console.log(item); 
} )

//uisng arrow function
coding.forEach((item)=>{
   console.log(item);
   
})

//another by passing function  to foreach as a parameter
function printme(item){
    console.log(item);
    
}
coding.forEach(printme)

coding.forEach((item, index, arr)=>{
console.log(item,index,arr);

})

const mycoding = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "Cpp",
        languageFileName : "c++"
    }
]

mycoding.forEach( (item)=> {
    console.log(item.languageName); 
})