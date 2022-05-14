const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumber = numbers.map((num) => { 
    return num -3
})
console.log(newNumber);

const names = ['Chuol', 'Shukri', 'Liz']
const students = names.map((students) =>{
    console.log(students + ' ' + 'is in class');
})

var animals = [
    { name: 'Waffles', type: 'dog', age: 12 },
    { name: 'Fluffy', type: 'cat', age: 14 },
    { name: 'Spelunky', type: 'dog', age: 4 },
    { name: 'Hank', type: 'dog', age: 11 },
]
var totalDogYears = animals
.filter((animals) => animals.type === 'dog')
.map   ((animals) => animals.age)
.reduce((prev, cur) => { prev + cur }, 0);

console.log(totalDogYears);