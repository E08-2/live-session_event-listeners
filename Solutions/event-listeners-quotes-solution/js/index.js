const quotes = [
    // Index 0
    'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    "Don't watch the clock; do what it does. Keep going.",
    'The secret of getting ahead is getting started.',
    'Well done is better than well said.',
    'You miss 100% of the shots you don’t take.',
    'A goal is a dream with a deadline.',
    'Outstanding people have one thing in common: An absolute sense of mission.',
    'Trying is winning in the moment.',
    'Fall down seven times and stand up eight.',
    "You just can't beat the person who never gives up.",
    'There is little success where there is little laughter.',
    // Index 11
    'We cannot solve our problems with the same thinking we used when we created them.'
];


// ================================================================
// #region Bonus Q5 - click the arrow to the left to open!

// * CSS color options:

//Name      Hex value        RGB value
//Salmon	#FA8072	         rgb(250, 128, 114)


// * Example RGB color (red):
// color: rgb(255, 0, 0);

// Function to return a random number betwen 0 and 255
const getRandomNumber = () => {
    let random = Math.floor(Math.random() * 256);

    return random;
}

// Function to generate a random RGB color
const generateColor = () => {
    // Use getRandomNumber() to generate 3 random numbers
    let red = getRandomNumber();
    let green = getRandomNumber();
    let blue = getRandomNumber();

    // Generate a random "rgb" value
    let newColor = `rgb(${red}, ${green}, ${blue})`;

    return newColor;
}

//#endregion
// ================================================================


const getRandomQuote = arr => {
    // Get random number between 0 and 11
    // Math.random() will give you a random number between 0 - 0.99999
    // Lowest number = 0
    // Highest number = 11.9999
    // Lowest floor number = 0
    // Highest floor number = 11
    let rand = Math.floor(Math.random() * arr.length);

    return quotes[rand];
}

const button = document.querySelector(".button");
const output = document.querySelector("#quote");

button.addEventListener("click", () => {
    // Replace the content of the "output" div with a new quote
    output.textContent = getRandomQuote(quotes);
    
    // Bonus Q5 - Give the "output" div a new border color
    output.style.borderColor = generateColor();
})