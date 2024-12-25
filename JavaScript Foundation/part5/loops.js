// Guidelines for Loops
// 1. Keyword 2. Termination condition 3. Body of loop
// Types of Loops
// 1. while 2. do/while 3. for 4. for/in 5. for/of 6. forEach

/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/

let i = 1;
let sum = 0;

while (i < 6) {
  sum += i;
  i++;
}

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/

let countdown = [];
let j = 5;

while (j > 0) {
  countdown.push(j);
  j--;
}
