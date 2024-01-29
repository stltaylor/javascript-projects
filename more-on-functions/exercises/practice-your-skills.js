//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

let tester = function(str) {
    if (typeof str === 'number') {
      return str * 3;
    } else if (typeof str === 'string') {
      return 'ARRR!'; 
    } else {
      return str;
    }
  }
  
  console.log(tester('booty'))
/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];

let testerTwo = arr.map(tester);

console.log(arr)
console.log(testerTwo)