// Define a function called calculateDemeritPoints that takes a speed parameter
function calculateDemeritPoints(speed) {
    // Define constants for speed limit, km per demerit point, and demerit points threshold
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const demeritPointsThreshold = 12;
  
    // Check if the speed is within the speed limit
    if (speed <= speedLimit) {
        console.log("Ok"); // Output "Ok" if speed is within limit
    } else {
        // Calculate demerit points if speed exceeds the speed limit
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        
        // Check if demerit points exceed the threshold for license suspension
        if (demeritPoints > demeritPointsThreshold) {
            console.log("License suspended"); // Output "License suspended" if demerit points exceed threshold
        } else {
            console.log("Points:", demeritPoints); // Output the demerit points if below the threshold
        }
    }
}

// Test the function with a speed of 80 and output the result
console.log(calculateDemeritPoints(80));
