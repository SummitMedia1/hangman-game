$(document).ready(function(){

var words = [
	"cohiba",
	"steak",
	"scotch",
	"apple",
	"harley",
	"nikon",
	"softail",
	"anejo",
	"reposado",
	"redskins"];


var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var chosenWord = "";
var numberOfLettersInWord = [];
var numberOfWrongGuesses = [];
var numberOfBlanksPerWord = ""; // changed 0 to ""
var numberOfGuesses = 10;
var guessedLetters = "";
var numberOfWins = "";
var numberOfLosses = "";
var blanksAndSuccesses = [];

// function letStartTheGame() {

numberOfGuesses = 10;
chosenWord = words[Math.floor(Math.random() * words.length)];
numberOfLettersInWord = chosenWord.split("");
numberOfBlanksPerWord = numberOfLettersInWord.length;

// Test the code here.

console.log(chosenWord);

// Resetting the number of blanks after guessing the letter and calling out the number of wrong guesses.
blanksAndSuccesses = [];
numberOfWrongGuesses = [];

// // // Establishing that the number of letters shown by underscores will
// // // equal the number of letters of the random word.
// // // The answer array will use [i] || the number of characters in the word
// // // and display the characters to be guessed with underscores.
function setDashes () {
 	for (var i = 0; i < chosenWord.length; i++){
 		blanksAndSuccesses[i] = "_";
 		var panel = document.getElementById('panel');
 		panel.innerHTML = blanksAndSuccesses.join(" ");
 	}
}
setDashes();
document.onkeyup = function(event) {
		  console.log(numberOfGuesses--);
	for (i = 0; i < chosenWord.length; i++) {
		if (event.key === chosenWord[i]) {
		  blanksAndSuccesses[i] = event.key;
		  var panel = document.getElementById('panel');
 		  panel.innerHTML = blanksAndSuccesses.join(" ");
		}
	}
	if (!chosenWord.includes(event.key)) {
		  numberOfWrongGuesses.push(event.key);
		  // console.log(numberOfGuesses--);
		  var wrongGuess = document.getElementById('wrong-guess');
		  wrongGuess.innerHTML = numberOfWrongGuesses.join(" ");

	}
	if (blanksAndSuccesses.join("") === chosenWord) {
		setInterval(function(){ alert("You win!"); }, 1000);
}

};
function guessCounter(){
  console.log(numberOfGuesses--);
  if (numberOfGuesses === 0){
    alert("GAME OVER. YOU LOSE!");
}
}
});
