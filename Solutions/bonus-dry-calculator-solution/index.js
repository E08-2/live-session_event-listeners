// * CALCULATOR - Bonus DRY Solution

// Step 1
const rows = [
    document.querySelectorAll(".add-row input"),
    document.querySelectorAll(".subtract-row input"),
    document.querySelectorAll(".multiply-row input"),
    document.querySelectorAll(".divide-row input"),
    document.querySelectorAll(".modulo-row input"),
]

// Step 2
const calculate = (num1, num2, arraysIndex) => {
    switch(arraysIndex) {
        case 0:
            return num1 + num2;
        case 1:
            return num1 - num2;
        case 2:
            return num1 * num2;
        case 3:
            const divideResult = num1 / num2;
            // Ternary operator 1
            // "If divideResult is not a number OR infinite, return -1, else return divideResult"
            return isNaN(divideResult) || divideResult === Infinity ? -1 : divideResult;
        case 4:
            const moduloResult = num1 % num2;
            // Ternary operator 2
            // "If moduloResult is not a number, return -1, else return moduloResult"
            return isNaN(moduloResult) ? -1 : moduloResult;
        default:
            return 0;
    }
}

// Step 3A
const addEventListeners = rowsArray => {
    // Step 3B
    rowsArray.forEach((inputsArray, rowIndex) => {
        // Step 3C
        inputsArray.forEach((input, inputIndex) => {
            if (inputIndex === 0 || inputIndex === 1) {
                // Step 3D
                input.addEventListener("input", () => {
                    inputsArray[2].value = calculate(Number(inputsArray[0].value), Number(inputsArray[1].value), rowIndex);
                })
            }
        })
    });
}

// Step 4
addEventListeners(rows);

// =======================================================

// * EXPLANATION
// ? Make sure to also check "index.html" as you read, to remind yourself of how the DOM looks!
// ? In the HTML, I have given each ROW its own class (e.g. ".add-row", "subtract-row" etc.)

//*  Step 1: 
//  - First, we will use 5x querySelectorAll().
//  - This gives you 5x arrays, each containing the INPUTS from one of the rows (".add-row", ".subtract-row", etc.).
//  - We will put all 5 arrays into a new array called "rows".

//*  Step 2:
//  - Create a function called "calculate". This will do the maths for you!
//  - The first two arguments are the first and second numbers the user has typed into a ROW.
//  - The third argument is an index. Later, this will clarify what to do with the two numbers (add? subtract? etc.).

//*  Step 3A:
//  - Create a function called "addEventListeners". This will add EVENT LISTENERS to the correct INPUTS!
//  - The function will take the "rows" array (created in Step 1) as an argument.

//*  Step 3B:
//  - Now, we will loop through the "rows" array loop 5 times. 
//  - Each loop will access one of the 5 arrays inside the "rows" array ("add", "subtract", "multiply", "divide" and "modulo").

//*  Step 3C:
//  - Next, for EACH of the 5 arrays, we will loop 3 times.
//  - Each loop will find 1 of the 3 INPUTS inside the current array.
//  - If this INPUT is one that the user can type numbers into, we will attach an EVENT LISTENER to it.
//  - We will not attach an event listener to the input which shows the result.

//*  Step 3D:
//  - If the user changes an INPUT with an EVENT LISTENER, it will call the "calculate" function we made in Step 2.
//  - The first two arguments are the numbers the user has typed into the current ROW.
//  - The third argument is the INDEX of the current array inside the "rows" array
//      - The first index of "rows" is the "add" array, the second index is the "subtract" array, etc.
//* - So this tells the function what calculation to do!

//*  Step 4:
//  - Call the "addEventListeners" function created in Steps 3A-3D.
//  - This will attach event listeners to the correct INPUTS in the HTML document.
//* - Now you can type into each row, and get the correct result!