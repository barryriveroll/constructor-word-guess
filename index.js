var Word = require("./word.js");
var inquirer = require("inquirer");
var wordArray = [
  "The Godfather",
  "Planet Of The Apes",
  "King Kong",
  "Armageddon",
  "Star Wars",
  "Frozen",
  "Toy Story",
  "Dawn of the Dead",
  "The Matrix"
];
var currentWord;
var losses = 0;
var wins = 0;

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
      currentWord.guessLetter(response.guess.toLowerCase());
      console.log("\n" + currentWord.displayCurrentWord() + "\n");
      if (currentWord.checkComplete() || currentWord.guessesRemaining <= 0) {
        endGame();
      } else {
        startRound();
      }
    });
}

function newGame() {
  console.log("  __   __  __   __   __     ");
  console.log(" |__  |   |  | | _| |__  ");
  console.log("  __| |__ |__| | \\  |__ ");
  console.log(
    "\x1b[36m",
    "\n WINS: ",
    "\x1b[33m",
    wins + " ",
    "\x1b[36m",
    "LOSSES: ",
    "\x1b[33m",
    losses + "\n"
  );
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
    losses++;
    console.log("\x1b[33m", "\nYou failed to guess the word!");
  } else {
    // win
    wins++;
    console.log("\x1b[33m", "\nYou guessed all the letters!");
  }
  newGame();
}
console.log("---------------------------------------------");
console.log("__      __      __   ____    _____   _____");
console.log("\\ \\    /  \\    / /  /    \\  |  _  | |     \\");
console.log(" \\ \\  / /\\ \\  / /  |  /\\  | |     / |  /\\  |");
console.log("  \\ \\/ /  \\ \\/ /   |  \\/  | | |\\ \\  |  \\/  |");
console.log("   \\__/    \\__/     \\____/  |_| \\_\\ |_____/");

console.log("   _____   _    _   _____   _____   _____");
console.log("  /  ___| | |  | | |  ___| |  ___| |  ___|");
console.log("  | | __  | |  | | | |___  | |___  | |___");
console.log("  | |_\\ \\ | \\__/ | | |___  \\___  | \\___  |");
console.log("  \\_____/ \\______/ |_____| /_____| /_____|");
console.log("\n---------------------------------------------\n");

newGame();
