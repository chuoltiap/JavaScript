//charAt()... show the character at the given position
//indexOf().. position of a character
//substr()... starting index and the number of slices
//substring()... starting index and the stopping index -1

let myName = 'trippie'
console.log(myName.toUpperCase());
console.log(myName.toLocaleUpperCase());
console.log(myName.toLocaleLowerCase());
var firstName = "Chuol"
var secondName = "Tayar"
var fullName = firstName + " " + secondName
console.log(fullName);
//character access
var myName = 'Chuol Tayar'
var charT = myName.charAt(6)
console.log(charT); 
let myFullName = 'Chuol  Tayar'
let lastIndex = myFullName.length -1
console.log(lastIndex);
console.log(myFullName.charAt(lastIndex));
let name = "Chuol Tayar Tiap"
console.log(name.substr(6, 5));
console.log(name.substring(2,5));
//split()
let message = '30 weeks of code'
console.log(message.split());
let message1 = '30 weeks of code'
console.log(message1.split(''));
let message2 = '30 weeks of code'
console.log(message2.split(' '));