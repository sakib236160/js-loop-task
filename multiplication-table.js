/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */

let number = 5; // The number for which we want the table
let multiplication = 1;

while (multiplication <= 10) { // We'll go from 1 to 10
    // console.log(number);
    multiplication = multiplication * number;
    multiplication++;
}
console.log('multiplication is:',multiplication)
