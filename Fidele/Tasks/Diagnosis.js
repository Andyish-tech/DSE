//JAVASCRIPT function that receives an array of marks and pas marks, then retutn a report
// A. It must return null if marks is not an array, empty or contains value that is not wHOLE NUMBER between 0 and 1000 inclusive. reject a numerical string and pasmark that is not a whole number
//B. use an indexed loop or while loop to calculate total, average, highest and lowest marks. Count passed student (mark >= passMark), Failed student and even marks.Zero is even mar Calculate range = highest - lowestand pasRate= passesd: number of student * 100. Round averageand passRate to decimal place ass number
// C. use if else for pass/fail and ternary operator to set status to "Target met" when average >= passMark, otherwise "Need support". use switch(true) to assign an average garde A>=80 B for >=60 and <80 then C for >50 and <60, D for >=40 and <50, otherwise "D". Return an object with the following properties: total, average, highest, lowest, range, passRate, passedCount, failedCount, status, grade.
//D. use console.log() to test supplied marks and call with passMARK= 101. rECORD EXPECTED AND ACTUAL RESULT. eXPLAIN HOW YOUR LOOP Determinates and strict equality differ from loose equality  

const marks = [78, 45, 90, 65, 50, 0, 100, 33];

function analyseMarks(marks, passMark = 50) {
    // A. Validate marks array
    if (!Array.isArray(marks) || marks.length === 0) {
        return null;
    }

    // Validate passMark: must be a whole number from 0 to 1000
    if (!Number.isInteger(passMark) || passMark < 0 || passMark > 1000) {
        return null;
    }

    // Validate every mark
    for (let i = 0; i < marks.length; i++) {
        if (
            !Number.isInteger(marks[i]) ||
            marks[i] < 0 ||
            marks[i] > 1000
        ) {
            return null;
        }
    }

    // B. Calculations
    let total = 0;
    let highest = marks[0];
    let lowest = marks[0];
    let passedCount = 0;
    let failedCount = 0;
    let evenCount = 0;

    // Indexed loop
    for (let i = 0; i < marks.length; i++) {
        const mark = marks[i];

        total += mark;

        if (mark > highest) {
            highest = mark;
        }

        if (mark < lowest) {
            lowest = mark;
        }

        // if/else for pass/fail
        if (mark >= passMark) {
            passedCount++;
        } else {
            failedCount++;
        }

        // Zero is even because 0 % 2 === 0
        if (mark % 2 === 0) {
            evenCount++;
        }
    }

    const average = Math.round((total / marks.length) * 100) / 100;
    const range = highest - lowest;

    const passRate =
        Math.round((passedCount / marks.length) * 100 * 100) / 100;

    // Ternary operator for status
    const status = average >= passMark
        ? "Target met"
        : "Need support";

    // switch(true) for grade
    let grade;

    switch (true) {
        case average >= 80:
            grade = "A";
            break;

        case average >= 60 && average < 80:
            grade = "B";
            break;

        case average >= 50 && average < 60:
            grade = "C";
            break;

        case average >= 40 && average < 50:
            grade = "D";
            break;

        default:
            grade = "D";
    }

    return {
        total,
        average,
        highest,
        lowest,
        range,
        passRate        
        
    };
}

// D. Test
const expected = {
    total: 461,
    average: 57.63,
    highest: 100,
    lowest: 0,
    range: 100,
    passRate: 62.5,
    passedCount: 5,
    failedCount: 3,
    evenCount: 4,
    status: "Need support",
    grade: "C"
};

const actual = analyseMarks(marks, 101);

console.log("Expected Result:");
console.log(expected);

console.log("Actual Result:");
console.log(actual);