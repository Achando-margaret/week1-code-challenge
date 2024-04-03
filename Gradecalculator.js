// Define a function called Grade that takes a marks parameter
function Grade(marks) {
    // Check if marks are greater than 79, if true return 'A'
    if (marks > 79) {
        return 'A';
    } 
    // If marks are between 60 and 79 (inclusive), return 'B'
    else if (marks >= 60 && marks <= 79) {
        return 'B';
    } 
    // If marks are between 50 and 59 (inclusive), return 'C'
    else if (marks >= 50 && marks <= 59) {
        return 'C';
    } 
    // If marks are between 40 and 49 (inclusive), return 'D'
    else if (marks >= 40 && marks <= 49) {
        return 'D';
    } 
    // If marks are less than 40, return 'E'
    else {
        return 'E';
    }
}

// Define studentMarks variable and assign it a value of 60
let studentMarks = 60;

// Validating input
if (studentMarks >= 0 && studentMarks <= 100) {
    // Call the Grade function with studentMarks as argument and assign the result to grade variable
    let grade = Grade(studentMarks);
    // Output the grade along with the corresponding marks
    console.log(`The grade for ${studentMarks} marks is: ${grade}`);
} 
// If input is not valid (outside the range of 0 to 100), output "Invalid"
else {
    console.log("Invalid");
}
