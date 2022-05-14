const value1 = document.querySelector('.value1');
const opr = document.querySelector('.opr');
const value2 = document.querySelector('.value2');

//query all buttons and
const numbers = document.querySelectorAll('#num');

//query all operators
const operators = document.querySelectorAll('.operator')

const getValue1 = ()=>{
    numbers.forEach((num)=>{
        value1.innerHTML = 34
    })
}
 const getOpr =  ()=>{
    operators.forEach((operand)=>{
        opr.innerHTML = "*"
    })
 }
function calculate (){
    if(opr.innerHTML === "*"){
        value1 * value
    }
 
}


numbers.forEach((num)=>{num.addEventListener('click', getValue1)})
numbers.forEach((opr)=>{opr.addEventListener('click', getOpr)})