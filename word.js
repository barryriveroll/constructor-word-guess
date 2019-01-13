var Letter = require("./letter.js");

var Word = function(letters) {
  this.letters = letters;
  this.guessesRemaining = 10;
  this.guesses = "";

  this.newWord = function(word) {
    for (var i = 0; i < word.length; i++) {
      this.letters.push(new Letter(word[i], false));
    }
  };

  this.displayCurrentWord = function() {
    var currentWord = "";
    letters.forEach(function(letter) {
      var addValue = "";
      if (letter.value === " ") {
        addValue = " ";
      } else {
        addValue = letter.returnCharacter();
      }
      currentWord += addValue + " ";
    });
    return currentWord;
  };

  this.guessLetter = function(guess) {
    var correct = 0;
    if (!this.guesses.includes(guess)) {
      this.guesses += guess + " ";
    }
    for (var i = 0; i < letters.length; i++) {
      if (letters[i].isGuessed(guess)) {
        correct++;
      }
    }
    if (!correct) {
      this.guessesRemaining--;
    }
  };
};

module.exports = Word;
