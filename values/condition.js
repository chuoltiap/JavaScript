let marks = 29.5
//grades from A...E
if (marks >= 61 && marks <=100 ) {
    console.log('A');
}
else if(marks >=50 && marks<= 60.49){
    console.log('Your grade is B');
}
else if(marks >=40 && marks<= 50.49){
    console.log('Your grade is C');
}
else if(marks >= 29 && marks<= 40.49){
    console.log('Your grade is D');
}
else if(marks >=0 && marks<= 29.49){
    console.log('Your grade is E');
}
else{
    console.log('You did not do the exams!');
}

//if
let name = 'Tayar'
if( name ==='Chuol' || name === 'Tayar'){
    console.log('Same person');
}
let name1 = 'Miyong'
if( name1 ==='Chuol' || name1 === 'Tayar'){
    console.log('Same person');
}
else{
    console.log('Not same person');
}