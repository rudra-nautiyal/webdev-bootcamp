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

/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/

let teaCollection = [];
let tea;

// do {
//   tea = prompt(`Enter your favourite tea (type "stop" to finish)`);
//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop");

/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/

let num = 1;
let sumTwo = 0;
do {
  sumTwo = sumTwo + num;
  num++;
} while (num < 3);

/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/

let multipliedNumbers = [];
let originalNumbers = [2, 4, 6];

for (let l = 0; l < originalNumbers.length; l++) {
  element = originalNumbers[l] * 2;
  multipliedNumbers.push(element);
}

/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let i = 0; i < cities.length; i++) {
  cityList.unshift(cities[i]);
}

console.log(cityList);
