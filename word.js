var Letter = require("./letter.js");

var Word = function(letters) {
  this.letters = letters;
  this.guessesRemaining = 10;
  this.guesses = "";

  this.newWord = function(word) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] === " ") {
        this.letters.push(new Letter(word[i], true));
      } else {
        this.letters.push(new Letter(word[i], false));
      }
    }
  };

  this.displayCurrentWord = function() {
    var currentWord = "";
    letters.forEach(function(letter) {
      currentWord += letter.returnCharacter() + " ";
    });
    return currentWord;
  };

  this.checkComplete = function() {
    var complete = true;
    for (var i = 0; i < letters.length; i++) {
      if (!letters[i].guessed) {
        complete = false;
      }
    }
    return complete;
  };

  this.guessLetter = function(guess) {
    var correct = 0;
    for (var i = 0; i < letters.length; i++) {
      if (letters[i].isGuessed(guess)) {
        correct++;
      }
    }
    if (!correct && !this.guesses.includes(guess)) {
      this.guessesRemaining--;
    }
    if (!this.guesses.includes(guess)) {
      this.guesses += guess + " ";
    }
  };
};

module.exports = Word;
