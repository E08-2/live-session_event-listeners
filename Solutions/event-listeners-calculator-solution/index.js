// * CALCULATOR SOLUTION

// * Pseudocode - how can we make the "Addition" row work?

// Process:
// 1. VALUE of first INPUT + VALUE of second INPUT = value of third INPUT

// Workflow:
// 1. User changes the VALUE of INPUT 1 or INPUT 2...
// 2. Result of Step 1 becomes the VALUE of INPUT 3

// Step 1 - Find the input in HTML and create a reference to it using document.querySelector()
const add1 = document.querySelector("#add_1");
const add2 = document.querySelector("#add_2");
const addResult = document.querySelector("#add_result");
// Alternative: const add1 = document.getElementById("add_1")

// Step 2: Attach an event listener to the element we want to track changes to
//Element              Event    Function to execute when the event is detected
//^                      ^        ^
add1.addEventListener("input", () => {
    // Third input value = First input value + Second input value
    addResult.value = Number(add1.value) + Number(add2.value);
    console.log(typeof Number(add1.value))
})

add2.addEventListener("input", () => {
    // Third input value = First input value + Second input value
    addResult.value = Number(add1.value) + Number(add2.value);
});