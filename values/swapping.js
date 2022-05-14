let a = 2;
let b = 3;
console.log(`The value of a after swapping:  ${a}`);
console.log(`The value of b after swapping:  ${b}`);
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping:  ${a}`);
console.log(`The value of b after swapping: ${b}`);

let ar1 = [1, 2, 3, 4]
let ar2 = [5, 6, 7, 8]

temp = ar1
ar1 = ar2
ar2 = temp

console.log(`The value of arr1 after swapping:  ${ar1}`);
console.log(`The value of arr2 after swapping: ${ar2}`);
console.assert(ar1 === [5, 6, 7, 8], "Not matched!" )

let cat1 = 13, cat2 = 14;
[cat1, cat2] = [cat2, cat1]
console.log(cat1);
console.log(cat2);
const arrr1 = [1, 2, 'b', 4];
const arrr2 = [3, 'a', 'c'];
temp = arrr1;
[arrr1[2], arrr2[0]] = [arrr2[0], arrr1[2]];
[arrr2[0], arrr2[1]] = [arrr2[1], arrr2[0]];
temp = arr2;


console.log(arrr1);
console.log(arrr2);


// Question 4:
'use strict';
/* swap values between two arrays */
// -- declare variables (this is correct) --
const arr1 = [1, 2, 'b', 4];
const arr2 = [3, 'a', 'c'];
let temp = arr1;
[arr1[2], arr2[0]] = [arr2[0], arr1[2]];
[arr2[0], arr2[1]] = [arr2[1], arr2[0]];
temp = arr2;
// -- swap values (write this code) --
// -- assert values (this is correct) --
console.assert(deepCompare(arr1, [1, 2, 3, 4]), 'array 1');
console.assert(deepCompare(arr2, ['a', 'b', 'c']), 'array 2');
// prettier-ignore
function deepCompare(actual, expect) {
return actual === expect ||
    Object.is(actual, expect) || (Object(actual) === actual && Object(expect)
    === expect) && (Array.isArray(actual) && Array.isArray(expect) &&
    actual.length === expect.length && expect.every((expect, index) =>
        deepCompare(actual[index], expect)) || Object.keys(actual).length ===
        Object.keys(expect).length && Object.keys(expect).every((key) =>
        deepCompare(actual[key], expect[key])));
}
