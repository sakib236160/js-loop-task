/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

// Find all the even numbers from 78 to 98.
let numbers = 78;

while(numbers<=98){
    // console.log(numbers)
    if(numbers % 2 === 0){
        console.log('Even Number is:',numbers)
    }
    numbers++;
}

// Find all the odd numbers from 61 to 100.

let nums = 61;

while(nums<=100){
    // console.log(nums)
    if(nums % 2 === 1){
        console.log(nums);
    }
    nums++
}