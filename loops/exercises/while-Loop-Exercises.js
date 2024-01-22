//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');
let startingFuelLevel = 0;
let numberAstronauts = 77;
let altitude = 0;



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
while (startingFuelLevel < 5000 || startingFuelLevel > 30000) {
    startingFuelLevel = input.question('Enter starting fuel level: ')
}



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  while (numberAstronauts > 7) {
    numberAstronauts = input.question('How many astronauts?: ')
  }
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.



while (startingFuelLevel > 0) {
  startingFuelLevel -= 100 * numberAstronauts;
  altitude += 50;
    if (altitude <= 2000) {
      console.log(`The shuttle gained an altitude of ${altitude} km.`);
    }
  

}


//(`The shuttle gained an altitude of ${altitude} km.`)











/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

let outcome = ''

if (altitude >= 2000) {
  if (startingFuelLevel > 0)
  console.log('Orbited Achieved!');
} else {
  console.log('Failed to reach orbit.')
}



console.log(outcome);