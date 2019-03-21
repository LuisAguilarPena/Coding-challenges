// Given an integer start_num, write code to print a countdown from
// start_num to 1. After the countdown is up, print the line "Liftoff!".
   
function liftOff(num) {
  for ( var i = num ; i > 0 ; i--) {
    console.log(i);
  }
  console.log("Liftoff");
};

liftOff(15);