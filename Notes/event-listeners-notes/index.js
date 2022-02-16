// * EVENT LISTENERS

// An event listener is a procedure in JS that waits for an event to happen in your page.
// An event is an important part of JS. It is something that happens to/in your page.
// For example, a user of the page does something, or something happens to the page (e.g. it finishes loading).

// An event listener can "listen" for some kind of event
// For example, if the user clicks a button
// When that event happens, the event listener can then execute some code in response to the event
// E.g. Another element changes color, or a new element is created, etc. etc.

// * You can add any number of event listeners to a single element!

// =============================

// * Example 1 - click the button and log "Hello world" to the browser console:

// The way you can add an event listener to an element is to:
//  (1) Select the element
//  (2) Use that element's "addEventListener()" method

// Create a function which prints "Hello world" to the console
const printHelloWorld = () => {
    console.log("Hello world");
}

// Select the button element
const button = document.querySelector(".button");
// Give the button an event listener
//                       Event   Callback function
//                         ^            ^
// button.addEventListener("click", printHelloWorld);
// You can also add a second event listener to the same element - and a third, fourth etc.!
// button.addEventListener("mouseover", printHelloWorld);

// ============================

// * Example 2: When the user clicks the button...
// * ... update the content of the "output" div to track how many times the user has clicked

const output = document.querySelector(".output");

let counter = 0;

// const countClick = () => {
//     counter++;
// }

button.addEventListener("click", () => {
    output.textContent = `You clicked the button ${++counter} times!`;
});