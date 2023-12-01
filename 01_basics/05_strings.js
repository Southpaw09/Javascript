const name = 'Hitesh';
const repoCount = 50;

console.log(`Hello my name is ${name} and my repocount is ${repoCount}.`)


const gameName = new String('hiteshhc'); //can be defined as objects
console.log(gameName);
console.log(gameName[0]);
console.log(name[0]);

console.log(name.length);//length of string
console.log(name.toUpperCase()); // =>Original value is not changed
console.log(name.charAt(4));// character at
console.log(name.indexOf("s"));

const newString = gameName.substring(0,4);
console.log(newString)//hite => starting with 0, 4 characters are given

//read about slice, split and other methods

const newStringOne = "   Hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());//trims the spaces, we have trimEnd(), trimStart()

const url = "https://hitesh.com/hitesh%20chaoudhary";
const newUrl = url.replace('%20', '-');
console.log(newUrl);

console.log(url.includes('ite'));