// Problem-3 : Factorial of a number

// Without function
// let number = 10;
// let result = 1;

// for (let i = 1; i <= number; i++) {
//     result = result * i;
//     console.log(i);
// }
// console.log(result);

// with function
function factorialOfNumber(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
        console.log(i);
    }
    return result;

}
console.log('Factorial', factorialOfNumber(10));