const name  = "Tahseen"
const repoCount = 50

console.log(name + repoCount + "value"); // dont use this 

// use this

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);// this is a modern technique 

const gameName = new String('Tahseen');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4) // here you can give negative value 
console.log(newString);

const anotherString = gameName.slice(-8,4)  // negative value allowed 
console.log(anotherString)

const newStringOne = "     Tahseen   " 
console.log(newStringOne);
console.log(newStringOne.trim()); // trim is ussed to remove space 

const url = "https://Tasheen.com/tahseen%20Anwer"
console.log(url.replace("%20" , "-"));  // removing or replacing
console.log(url.includes("Kaif"));  // to ask whether it is in or not 


