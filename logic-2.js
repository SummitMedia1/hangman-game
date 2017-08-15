// Establish as many variables up front to begin the game fresh.

// First variable will be the words to randomly choose from.

var word = ["harley", "softail", "fuente", "tequila", "scotch"];

// Establish the number of blanks to display on the screen.
var numberOfBlanks = 0;

// Split the words down to characters.
var numberOfLettersInWord = [];

// Count number of wrong guesses.
var wrongGuesses = [];

// The number of guessed guesses.
var guessedLetters = "";

// Wins counter.
var numberOfWins = 0;

// Losses counter.
var numberOfWins = 0;

// Number of guesses.
var numOfGuesses = 10;


// Start the game with a function

function startTheGame() {

numberOfGuesses = 10;

// This sets the computer to choose the word randomly from the randomWords variable.
chosenWords = [Math.floor(Math.random() * word.length)];

// This will split the letters (""), words (" ")
numberOfLettersInWord = word.split("");

numberOfBlanks = numberOfLettersInWord.length;

console.log(word);












}