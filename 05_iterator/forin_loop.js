
const myObject ={
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift: "swift by apple" 
}

// forin

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programing = ["js", "rb" ,"rb", "cpp","java"]

for (const key in programing){
   console.log(programing[key]);
   
}


// not iterable 
const map = new Map()
map.set('IN',"India")
map.set('USA',"United state of America")
map.set('fr',"France")

for (const key in map) {
    console.log(key);
}