// Problem 1: Check if a Number is Even or Odd

//Without function

// let number = 11;

// if (number % 2 === 0) {
//     console.log('Even Number');
// } else {
//     console.log('Odd Number');
// }

//With function

function evenOrOddNumber(number){
if(number % 2 === 0){
    return'Even Number';
}else{
    return'Odd Number';
}
}
console.log(evenOrOddNumber(10));
console.log(evenOrOddNumber(99));