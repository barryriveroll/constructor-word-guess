var Word = require("./word.js");
var inquirer = require("inquirer");
var wordArray = ["cat", "dog", "fish"];

function newWord() {
  var testWord = new Word([]);
  testWord.newWord(wordArray[2]);
  console.log(testWord.displayCurrentWord());
  startGame();
}

function startGame() {
  inquirer.prompt([
    {
      message: "Guess a letter (a-z)",
      name: guess
    }
  ]);
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
