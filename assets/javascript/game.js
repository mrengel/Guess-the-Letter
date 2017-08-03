var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    
    var wins = 0;
    var losses = 0;
    var guesses = 10;
    var guessesLeft =10;
    var guessedLetters = [];
    var letterToGuess = null;

    var letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      console.log(letterToGuess);

    var updateGuessesLeft = function(){
      document.getElementById("guesses").textContent="Guesses Remaining: " + guessesLeft;
    };

    var updateLetterToGuess = function() {
        this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
        console.log(this.letterToGuess);
    };

    var updateGuessesSoFar = function() {
        document.getElementById("user").textContent="You guessed: "
        + guessedLetters.join(', '); 
    };

    var reset = function(){
      totalGuesses = 10;
      guessesLeft =10;
      guessedLetters =[];

      updateLetterToGuess();
      updateGuessesLeft();
      updateGuessesSoFar();
    }



    

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

     
      guessesLeft--;
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

      guessedLetters.push(userGuess);
      updateGuessesLeft();
      updateGuessesSoFar();

     
        if (guessesLeft>0){
          if (userGuess == letterToGuess){
            wins++;
            document.getElementById("wins").textContent="Wins: " + wins;
            reset();
          }
        }
        else if(guessesLeft==0){
          losses++;
          document.getElementById("losses").textContent="Losses: " + losses;
          reset();
        }
        
        

    }
    ;