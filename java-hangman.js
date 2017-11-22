// Arrays and Variables =======================================

var words = [
	"cigar",
	"steak",
	"scotch",
	"apple",
	"harley",
	"nikon",
	"softail",
	"donjulio",
	"mercedes",
	"frontier",
	"talisker",
	"beatles",
	"virginia",
	"riddell",
	"rocky",
	"goodfellas",
	"fender",
	"summit",
	"advertising",
	"photography",
	"florida",
	"lobster",
	"reagan",
	"media",
	"redskins",
	"orioles",
	"capitals",
	"godfather",
	"fedora",
	"balvenie",
	"creativity",
	"movies"
];

var selectedWord = "";
var lettersInWord = [];
var numBlanks = "";
var blanksAndSuccesses = [];
var wrongLetters = [];
var guessedLetters = [];

// Counters ====================================================================

var winCounter = 0;
var lossCounter = 0;
var guessesLeft = 10;

// Functions ===================================================================

function startGame(){

	selectedWord = words[Math.floor(Math.random() * words.length)];
	lettersInWord = selectedWord.split("");
	numBlanks = lettersInWord.length;

	// Reset variables with each start of a new GAME
	wrongLetters = [];
	guessedLetters = [];
	blanksAndSuccesses = [];
	lettersInWord = [];
	if (lettersInWord.length < 6){
		guessesLeft = 10
	} else if (lettersInWord.length < 8){
		guessesLeft = 12
	} else {
		guessesLeft = 14
	}


	// Populate the number of characters in the word with blanks =================
	 	for (var i = 0; i < numBlanks; i++){
	 		blanksAndSuccesses.push("_");
}
	// Change the HTML so blanks match the number of letters in the selected word
	// .join keeps blanks from having commas in between the blanks
		document.getElementById('wordBlanks').innerHTML = blanksAndSuccesses.join(" ");
		document.getElementById('numGuesses').innerHTML = guessesLeft;
		document.getElementById('winCount').innerHTML = winCounter;
		document.getElementById('lossCount').innerHTML = lossCounter;

	// Testing & Debugging Word ==================================================
	console.log(selectedWord);
	// console.log(lettersInWord);
	// console.log(numBlanks);
	// console.log(blanksAndSuccesses);
//

}

function checkLetters(letter){

	//check to see if selected letter is anywhere in the word ====================
	var isLetterInWord = false;
		for (var i = 0; i < numBlanks; i++){
			if(selectedWord[i] === letter){
				isLetterInWord = true;
			}
		}

		// Check where the letter in the word exists, and then populate the blanksAndSuccesses arry.
		if(isLetterInWord) {
			for (var j = 0; j < numBlanks; j++){
				if(selectedWord[j] === letter){
					blanksAndSuccesses[j] = letter;
					guessesLeft--;
			}
		}
	}

	// Letter was not found so...
		else {
			wrongLetters.push(letter)
			guessesLeft--;
		}

	// Testing / Debugging
		// console.log(blanksAndSuccesses);
}

function endGame(){
	// console.log("Win Count " + winCounter + " | Loss Count " + lossCounter + " | Guesses Left " + guessesLeft);

	document.getElementById('numGuesses').innerHTML = guessesLeft;
	document.getElementById('wordBlanks').innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById('wrongGuessBlanks').innerHTML = wrongLetters.join(" ");

	// Check if player won or lost game
	if (blanksAndSuccesses.join("") === selectedWord.toString()){
		winCounter++;
		alert("Good Job Hotshot! You Won The Game!");
		// Update win counter in HTML
		document.getElementById("winCount").innerHTML = winCounter;
		startGame();
	}

	else if (guessesLeft === 0){
		lossCounter++;
		alert("You Lost The Game. Now Say Beetlejuice Three Times Fast!");
		// Update loss counter in HTML
		document.getElementById("lossCount").innerHTML = lossCounter;
		startGame();
	}
}

// Main Processes ==============================================================

// Initiates the start of the game
startGame();

// Registers player key clicks
document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	endGame();

// Testing / Debugging =========================================================
	// console.log(letterGuessed);
};
