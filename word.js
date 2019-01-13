var Letter = require("./letter.js");

var Word = function(letters) {
  this.letters = letters;

  this.newWord = function(word) {
    for (var i = 0; i < word.length; i++) {
      this.letters.push(new Letter(word[i], false));
    }
  };

  this.displayCurrentWord = function() {
    var currentWord = "";
    letters.forEach(function(letter) {
      currentWord += letter.returnCharacter() + " ";
    });
    return currentWord;
  };

  this.guessLetter = function(guess) {
    letters.forEach(function(letter) {
      letter.isGuessed(guess);
    });
  };
};

module.exports = Word;
