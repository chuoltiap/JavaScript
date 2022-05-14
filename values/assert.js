// const info1 = {
//     name : "Chuol",
//     age : 24,
// } 

// const info2 = {
//     name : "Chuol",
//     age : 25, 
// }
// let newAge = 'age'
// info1['age'] = 25,
// console.log(info1);
// console.log(info2);

// console.assert(JSON.stringify(info1)===JSON.stringify(info2), 'Objects are not same!');
// console.assert('1' == 1, 'Wrong result');

// // Question 6:
// 'use strict';
// /* swap values between two objects */
// // -- declare variables (this is correct) --
// let  obj1 = { a: 'z', b: 2, c: 3 };
// let obj2 = { a: 'x', b: 'y', c: 1 };
// let temp;
// // -- swap values (write this code) --
// temp = obj1;
// obj1 = obj2;
// obj2 = temp;
// if (obj1 != obj2) {
//   return true;
// }
// // -- assert values (this is correct) --
// console.assert(deepCompare(obj1, { a: 1, b: 2, c: 3 }), 'object 1');
// console.assert(deepCompare(obj2, { a: 'x', b: 'y', c: 'z' }), 'object 2');
// // prettier-ignore
// function deepCompare(actual, expect) {
//   return actual === expect ||
//     Object.is(actual, expect) || (Object(actual) === actual && Object(expect)
//       === expect) && (Array.isArray(actual) && Array.isArray(expect) &&
//         actual.length === expect.length && expect.every((expect, index) =>
//           deepCompare(actual[index], expect)) || Object.keys(actual).length ===
//           Object.keys(expect).length && Object.keys(expect).every((key) =>
//             deepCompare(actual[key], expect[key])));
// }


// 'use strict';

// const { isFlowDeclaration } = require("@babel/types");

// // this function is empty
// // write it!
// /**
// *
// */
// const addToItems = (arr) => { 
// return arr;
// };
// // the tests are all correct! write the function ^
// const _1_expect = []; 
// const _1_actual = addToItems([], 0);
// console.assert(deepCompare(_1_actual, _1_expect), '1. an empty array');
// const _2_expect = [2, 3, 4];
// const _2_actual = addToItems([1, 2, 3], 1);
// console.assert(deepCompare(_2_actual, _2_expect), '2. add 1');
// const _3_expect = [0, 1, 2, 3];
// const _3_actual = addToItems([1, 2, 3, 4], -1);
// console.assert(deepCompare(_3_actual, _3_expect), '3. add -1');
// const _4_expect = [1, 2];
// const _4_actual = addToItems([1, 2]);
// console.assert(
//   deepCompare(_4_actual, _4_expect),
//   '4. second param defaults to 0'
// );
// const _5_expect = [];
// const _5_actual = addToItems();
// console.assert(
//   deepCompare(_5_actual, _5_expect),
//   '5. first param defaults to []'
// );
// const _6_argument = [1, 2, 3];
// addToItems(_6_argument, 3);
// console.assert(deepCompare(_6_argument, [1, 2, 3]), '6. has no sideeffects');
// // prettier-ignore
// function deepCompare(actual, expect) {
//   return actual === expect ||
//     Object.is(actual, expect) || (Object(actual) === actual && Object(expect)
//       === expect) && (Array.isArray(actual) && Array.isArray(expect) &&
//         actual.length === expect.length && expect.every((expect, index) =>
//           deepCompare(actual[index], expect)) || Object.keys(actual).length ===
//           Object.keys(expect).length && Object.keys(expect).every((key) =>
//             deepCompare(actual[key], expect[key])));}


// Question 2:
'use strict';
// this function does not pass it's tests
// fix it!
/**
*
* @param { } arr
* @returns
*/
const reverseArray = (...arr) => {
  let reversed = arr.reverse().join('');
  if(arr = []){
    return arr
  }
  else if(arr = [str]){
    return reversed
  }
};
// the tests are all correct! fix the function ^
const _1_expect = [];
const _1_actual = reverseArray([]);
console.assert(deepCompare(_1_actual, _1_expect), '1. an empty array');
const _2_expect = [4, 3, 2, 1];
const _2_actual = reverseArray([1, 2, 3, 4]);
console.assert(deepCompare(_2_actual, _2_expect), '2. an array of numbers');
const _3_expect = ['c', 'b', 'a'];
const _3_actual = reverseArray(['a', 'b', 'c']);
console.assert(deepCompare(_3_actual, _3_expect), '3. an array of strings');
const _4_expect = [];
const _4_actual = reverseArray();
console.assert(deepCompare(_4_actual, _4_expect), '4. has a default parameter');
const _5_argument = [1, 2, 3];
reverseArray(_5_argument);
console.assert(deepCompare(_5_argument, [1, 2, 3]), '5. has no side  effects');
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
