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
    if (guessValue === this.value) {
      this.guessed = true;
    }
  };
};

module.exports = Letter;
