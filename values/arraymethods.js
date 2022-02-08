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
// //Accessing array element
// console.log(marks[0]);

// //Print the whole array
// console.log(marks);

// //array modification
// //change the first element to 90
// marks[0] = 90
// console.log(marks)

// 5.Array methods
// -Array
// -length
// -concat
// -indexOf
// -Slice
// -splice
// -jion
// -tostring
// -include
// -lastIndex
// -isArray
// -fill
// -push
// -shift
// -unshift

