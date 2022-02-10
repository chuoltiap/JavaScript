


//syntax of an object
let studentInfo = {
    studentName: "Chuol",
    age: 24,
    isSouthSudanese: !true,
    marks: [57, 84, 69]
}
console.log(studentInfo.isSouthSudanese);
console.log(studentInfo.marks[2]);
console.log(studentInfo.age);
console.log(studentInfo.studentName);


let info = {
    firstName: "Chuol",
    secondName: 'Tayar',
    age: 24,
    isMale: true,
    isSouthSudanese: !true,
    marks: [86, 45, 92, 73, 36],
    reverse: reverse,

}

console.log(info.firstName.concat(' ',info.secondName));
console.log(info.age);
console.log(info.isMale);
console.log(info.isSouthSudanese);
console.log(info.marks[info.marks.length -1]);
console.log(info.secondName.charAt(info.secondName.length -1));
thirdName = 'Tiap'
info.secondName = 'Tayar'
console.log(info.thirdName);
console.log(info);

function reverse(str){
    let reversed = ''
    for(let i = str.length - 1; i >= 0; i--){
    reversed =reversed + str[i]
    }
    return reversed
}
console.log(info.reverse('cat'));


let car = {
    name: 'ferrari',
    wheels: 4,
    cost: '35 kenya million',
    ferrariInfo: function(){
       console.log(`name is  ${this.name} and the cost is ${this.cost}`);
    }
  }
  info.car = car
  console.log(car.wheels);
  console.log(car.ferrariInfo());