/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
// let numbers  = 81;
// let sum = 0;
// while(numbers<=131){
//     // console.log(numbers)
//     if(numbers % 2 === 1){
//         sum = sum + numbers;  
//     }
//     numbers++
// }
// console.log('Sum of all odd numbers from 81 to 131 is:', sum);

/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */
let number = 206;
let sum = 0;

while (number <= 311) {
    if (number % 2 === 0) { // Check if the number is even
        sum += number; // Add the even number to sum
    }
    number++; // Move to the next number
}

console.log('Sum of all even numbers from 206 to 311 is:', sum);

