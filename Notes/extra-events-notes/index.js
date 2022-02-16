// * 1. Mouse Event Revision

// "click" - when the user clicks an element
// "dblclick" - when the user double clicks an element
// "mouseover" - when the user moves their mouse over an element
// "mouseout" - when the user removes their mouse from an element

// ==============================================================

const input = document.querySelector(".myInput");

// * 2. NEW - Keyboard Events

// 1. "keydown" - when the user PRESSES a key on their keyboard

input.addEventListener("keydown", () => {
    //console.log("A key was pressed!");
})

// 2. "keyup" - when the user RELEASES a key on their keyboard

input.addEventListener("keyup", () => {
    //console.log("A key was released!");
})

// ! keyup and keydown do have a problem...
// If you paste text using the mouse, they do not get triggered!

// =============================================================

// * 3. Change Events...

// ? So how can we "hear" changes to the input, even when we paste with the mouse?

// * Option 1: "change"

// "change" helps with the problem around "keyup" and "keydown"

const output = document.querySelector(".output");

input.addEventListener("change", () => {
    output.textContent = `The user typed: ${input.value}`;
})

// ! But there is another problem!
// The "change" event is only heard when the input LOSES FOCUS
// (i.e. when I click somewhere else on the page)

// ===============

// * Option 2 - the good option! - "input"

input.addEventListener("input", () => {
    // output.textContent = `The user typed: ${input.value}`;
})