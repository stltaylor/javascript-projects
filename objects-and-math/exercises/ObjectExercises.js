let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 7,
   move: function() {
      return Math.trunc(Math.random() * 10)
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 1,
   move: function () {
      return Math.trunc(Math.random() * 10)
   }
};

let superChimpTwo = {
   name: 'Brad',
   species: 'Chimpanzee',
   mass: 11,
   age: 6,
   astronautID: 2,
   move: function () {
      return Math.trunc(Math.random() * 10)
   }
};

let beagle = {
   name: 'Leroy',
   species: 'Beagle',
   mass: 14,
   age: 5,
   astronautID: 3,
   move: function () {
      return Math.trunc(Math.random() * 10)
   }
};

let tardigrade = {
   name: 'Almina',
   species: 'Tardigrade',
   mass: .0000000001,
   age: 1,
   astronautID: 5,
   move: function () {
      return Math.trunc(Math.random() * 10)
   }
};

let crew = [superChimpOne, superChimpTwo, salamander, beagle, tardigrade];
// After you have created the other object literals, add the astronautID property to each one.



// Create an array to hold the animal objects.

// Print out the relevant information about each animal.
function crewReports(animal) {
   console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`)
} 

crewReports(superChimpOne);
   let stepsArray = [];

// Start an animal race!
function fitnessTest(array) {

}