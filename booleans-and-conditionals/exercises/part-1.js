// Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = 'red blinking';
let spaceSuitsOn = true;
let shuttleCabinReady = true;


let computerStatusCode = 200;
let shuttleSpeed = 15000;
let crewStatus = false;

if (spaceSuitsOn && shuttleCabinReady) {
   crewStatus = true;
}



// BEFORE running the code, predict what will be printed to the console by the following statements:

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}
