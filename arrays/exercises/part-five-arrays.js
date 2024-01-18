let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split()) // str is now an array
console.log(str.split('e')) // removed e and seperated 
console.log(str.split(' '));   // spilit up after every white space
console.log(str.split(''));  //   spilit by char




//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join('poo'));
console.log(arr)
console.log(str)



//3) Do split or join change the original string/array?
// nah
//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
cargoHold = cargoHold.split(',');
cargoHold = cargoHold.sort();
cargoHold = cargoHold.join()
console.log(cargoHold);