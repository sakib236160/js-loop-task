/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/
for (let i = 1; i <= 100; i++) {
    if (i <= 30) {
        console.log("Found 100, exiting loop.");
        break; 
    }
    console.log(i); 
}
