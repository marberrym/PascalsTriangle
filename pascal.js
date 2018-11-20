let pascal = (rows) => {
    //Initialize necessary variables
    let current = 1;
    let currentRow = [];
    let previousRow;

    //Test cases for invalid numbers
    if (rows === 0 || rows === 1) {
        console.log("Invalid input of 0 or 1.");
        return false;
    }

    //Test cases for invalid input types
    if (typeof rows !== "number") {
        console.log("Invalid input type string.");
        return false;
    }

    //Building the triangle
    while (current < (rows + 1)) {
        for(i=0; i<current; i++) {
            if (i === 0 || i === (current - 1)) {
                currentRow.push(1);
            } else {
                let value = previousRow[i - 1] + previousRow[i];
                currentRow.push(value);
            }
        }
        console.log(currentRow);
        //Update values before next loop
        current++;
        previousRow = currentRow;
        currentRow = [];
    }
}

//Test Cases:
console.log("Test Case: 0 rows should be an invalid input.");
console.assert(pascal(0) === false, "0 isn't a valid number of rows.");
console.log("");

console.log("Test Case: 1 row should be an invalid input.");
console.assert(pascal(1) === false, "1 isn't a valid number of rows.");
console.log("");

console.log("Test Case: String should be invalid input.");
console.assert(pascal("hello") === false, "Strings are not a valid input.");
console.log("");

console.log("Test Case: 3 rows.");
pascal(3);
console.log("");

console.log("Test Case: 5 rows.");
pascal(5);
console.log("");

console.log("Test Case: 7 rows.");
pascal(7);
console.log("");

console.log("Test Case: 10 rows.");
pascal(10);
console.log("");

console.log("Test Case: 15 rows.");
pascal(15);
console.log("");



