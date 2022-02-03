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

let myName = 'Chuol, Tayar, Tiap'
console.log(myName.split(','));

let myName = 'Chuol . Tayar . Tiap'
console.log(myName.split('.'));

//trim
let msg = '             We love programming   '
let msg2 = 'We love programming'
console.log(msg2);
console.log(msg);
console.log(msg.trim());


//concat
let firstName = 'Chuol'
let secondName = 'Tayar'
let fullName = firstName.concat(' ', secondName)
console.log(fullName);

//include
let message = 'This is a javascript practice'
console.log(message.includes('chuol'));

let message1 = 'This is a javascript practice by chuol'
console.log(message1.includes('chuol'));

let message2 = 'This is a javascript practice by Chuol'
console.log(message2.includes('chuol'));

//replace
let myMessage = 'I am a student of iTalanta Academy'
let myResult = myMessage.replace('iTalanta', 'Elewa')
console.log(myResult );

//start with()
let myName4 = 'Chuol Tayar'
console.log(myName4.startsWith('Chu'));
console.log(myName4.endsWith('yar'));