var Word = require("./word.js");
var inquirer = require("inquirer");
var wordArray = ["cat", "dog", "cat dog"];
var currentWord;

function newWord() {
  currentWord = new Word([]);
  currentWord.newWord(wordArray[2]);
  console.log("\n\n" + currentWord.displayCurrentWord());
  startGame();
}

function startGame() {
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
          //   return name.length === 1 && name.match(/[a-z]/i);
          if (name.match(/[a-z]/i) && name.length === 1) {
            return true;
          }
        }
      }
    ])
    .then(function(response) {
      currentWord.guessLetter(response.guess);
      console.log("\n\n" + currentWord.displayCurrentWord());
      startGame();
    });
}

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
    }
  });
