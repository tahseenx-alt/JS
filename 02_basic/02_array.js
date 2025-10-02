s 
const marvel_hero = ["Thor","Ironman", "Captain America"]
const dc_hero = ["Superman", "Flash", "Batman"]
marvel_hero.push(dc_hero) // it create a array inside a array which contain all dc hero
console.log(marvel_hero);

// to access flash you have to write [3][1]
console.log(marvel_hero[3][1]);
 
//other method 

const allHeros = marvel_hero.concat(dc_hero)
console.log(allHeros);

// other method 
const all_Heros = [...marvel_hero,...dc_hero]
console.log(all_Heros);

const anotherarray1 = [1,2 ,3 ,[4, 5, 6],7,[6,7,[4,5]]]

const anotherarray2 = anotherarray1.flat(Infinity)
console.log(anotherarray2);

console.log(Array.isArray("Tahseen")); // to check
console.log(Array.from("Tahseen"));  // to create a array
console.log(Array.from({name : "Anwer"}));  // it ive me empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // convert ot array


