var Word = require("./word.js");
var inquirer = require("inquirer");
var wordArray = [
  "the godfather",
  "planet of the apes",
  "king kong",
  "armageddon"
];
var currentWord;

function newWord() {
  currentWord = new Word([]);
  var wordIndex = Math.floor(Math.random() * wordArray.length);
  currentWord.newWord(wordArray[wordIndex]);
  console.log("\n\n" + currentWord.displayCurrentWord());
}

function startRound() {
  console.log(
    "Incorrect guesses remaining: " +
      currentWord.guessesRemaining +
      "\nGuesses made: " +
      currentWord.guesses
  );
  inquirer
    .prompt([
      {
        message: "Guess a letter (a-z)",
        name: "guess",
        validate: function validateGuess(name) {
          return name.match(/[a-z]/i) && name.length === 1;
        }
      }
    ])
    .then(function(response) {
      currentWord.guessLetter(response.guess);
      console.log("\n\n" + currentWord.displayCurrentWord());
      if (currentWord.checkComplete() || currentWord.guessesRemaining <= 0) {
        endGame();
      } else {
        startRound();
      }
    });
}

function newGame() {
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Do you want to start a new word?",
        name: "confirm"
      }
    ])
    .then(function(response) {
      if (response.confirm) {
        newWord();
        startRound();
      }
    });
}

function endGame() {
  if (currentWord.guessesRemaining === 0) {
    // fail
    console.log("You lost! :(");
  } else {
    // win
    console.log("You got all the letters!!!");
  }
  newGame();
}

newGame();
