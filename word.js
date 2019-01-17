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

    if (!this.guesses.includes(guess.toLowerCase())) {
      this.guesses += guess.toLowerCase() + " ";

      if (!correct) {
        console.log(
          "\x1b[31m%s\x1b[0m",
          "\n----------------\n   INCORRECT!\n----------------"
        );

        this.guessesRemaining--;
      } else {
        console.log(
          "\x1b[32m%s\x1b[0m",
          "\n----------------\n    CORRECT!\n----------------"
        );
      }
    } else {
      console.log(
        "\x1b[36m%s\x1b[0m",
        "\n----------------\nAlready guessed!\n----------------"
      );
    }
  };
};

module.exports = Word;
