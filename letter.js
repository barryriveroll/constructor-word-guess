var Letter = function(value, guessed) {
  this.value = value;
  this.guessed = guessed;

  this.returnCharacter = function() {
    if (this.guessed) {
      return this.value;
    } else {
      return "_";
    }
  };

  this.isGuessed = function(guessValue) {
    var correct = false;
    if (guessValue === this.value) {
      this.guessed = true;
      correct = true;
    }
    return correct;
  };
};

module.exports = Letter;
