// 5.Array methods
// -Array
// -length
// -concat
// -indexOf
// -Slice
// -splice
// -join
// -toStrings
// -include
// -lastIndex
// -isArray
// -fill
// -push
// -shift
// -unshift


let marks = [70, 80, 70.5, 60, 40]
 //Array length
console.log(marks.length);
let catFamily = ['Lion','Cheetah', 'Leopard', 'cat']
//Print an element of an array by index
console.log(catFamily[1]);
//Print the whole array
console.log(catFamily);
//modify the Cat to Tiger
catFamily[catFamily.length - 1] = 'Tiger'
console.log(catFamily);
//modify Lion to Jaguar
catFamily[0] = 'Jaguar'
console.log(catFamily);

//Add a new value at the end of the array 
catFamily.push('Panther')
console.log(catFamily);

//Add a new value at the start of the array
catFamily.unshift('Puma')
console.log(catFamily);

// Remove an element at the end of the array
catFamily.pop()
console.log(catFamily);

//Remove an element from the start of the array

catFamily.shift()
console.log(catFamily);

// get indexOf array element
console.log(catFamily.indexOf('Cheetah'));

// print Cheetah
console.log(catFamily[catFamily.indexOf('Cheetah')]);

//join array element together
let name = ['Chuol', 'Tayar']
console.log(name.join(' '));

//concat two arrays
let sisters = ['Sarah', 'Rachael', 'Vicky']
let brothers = ['Ali', 'Hussein', 'Peter']
let family = sisters.concat(brothers);
console.log(family);


//Splice the element of array
family.splice(4,1, 'Rhoda', 'Linda', 'Lydia')
console.log(family);

// //Slice the elements os ans array
// let months = ['Jan', 'March', 'April',  'May', 'June'];
// let newMonths = months.splice(2, 2,);
// console.log(newMonths);


// months.splice(2, 4,);
// console.log(months);

// console.log(months.isArray());

// //Accessing array element
// console.log(marks[0]);

// //Print the whole array
// console.log(marks);

// //array modification
// //change the first element to 90
// marks[0] = 90
// console.log(marks)


function processData(inputString) {
    // This line of code prints the first line of output
    console.log("Hello, World.");
    
    // Write the second line of output that prints the contents of 'inputString' here.

