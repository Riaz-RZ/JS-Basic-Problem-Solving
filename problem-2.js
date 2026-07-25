// Problem 2: Sum of a Range of Numbers (1 to N)

// 7  = 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28


//Without function


// let sum = 0;
// let number = 7;
// for (let i = 1; i <= number; i++) {
//     sum = sum + i;
//     console.log('Number =>', i);
// }
// console.log('Sum =>', sum);

// With function

function sumOfNumbers(number) {

    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum = sum + i;
        console.log('number =>', i);
    }
    return sum;
}
console.log('Sum =>', sumOfNumbers(7));