// function palindrome(str){
//     let reverseString = str.toLowerCase().split('').reverse().join('')
//     if(str===reverseString){
//         return console.log('${str} is a palindrome');
//     }
//     else{
//         return console.log('${str} is not a palindrome');
//     }
//     return reverseString

// }
// console.log(palindrome('MUM'));
// console.log(palindrome('Dad'));
// console.log(palindrome('cat'));

// palindrome('DAD')



// function palindrome(str){
//     let reversedString =  str.toLowerCase().split('').reverse().join('')
//     if(str === reversedString){
//        console.log(`${str} is a palindrome`)
//     }
//     else {
//        console.log(`${str} is not a palindrome`)
//     }
//     return reversedString
//   }
//   // console.log(palindrome('dad'));
//   // console.log(palindrome('MUM'));
//   // console.log(palindrome('cat'));
//   palindrome('DAD')
  
// function reverse(str){
//     let reversed = ''
// for(let i = str.lenth - 1; i >= 0; 1--){
// reversed = str[i] + reversed
// return reversed 
// }
// }

function reverse(str){
    let reversed = ''
    for(let i = str.length - 1; i >= 0; i--){
     reversed = reversed + str[i]
    }
    return reversed

    function reverse(str){
      if(str === reverse(str)){
        console.log(`${str} is a palindrome `)
      }
      else {
               console.log(`${str} is not a palindrome`)
           }
           return reversed
  }
}
  console.log(reverse('cat'));

//shorthand property