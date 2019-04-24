document.addEventListener("DOMContentLoaded", function(){
  // create an array of words
  var animals = ['llama', 'octopus', 'elephant', 'bear', 'jerobe' , 'snake', 'canary', 'snail', 'giraffe', 'ram', 'cow', 'lion', 'alligator', 'tiger', 'monkey', 'beaver', 'zebra', 'deer', 'penguin', 'cockroach', 'chicken', 'jaguar', 'whale', 'butterfly', 'cougar', 'jellyfish', 'shark', 'kangaroo', 'mouse', 'lizard']
  // var cars = ['ferrari', 'lamborghini', 'buggati', 'zonda', 'saleen', 'tesla', 'mercedes' ]

  var wrongLetter = []
  var lives = 6;
  var underScores = [];
  var userGuess = [];
  var random;
  var winCounter = 0;
  var loseCounter = 0;
  var validChar =("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");

  var livesLost=document.getElementById('count')
  var puzzle =document.getElementById('puzzle');
  var wordsUsed =document.getElementById('wordsUsed');
  var hangman = document.getElementById('stickman').src;
  var winCondition =document.getElementById('message');
  //=====================Upon starting new game=================
  //pick a random words
  function startGame(){
    random = animals[Math.floor( Math.random()*animals.length)];
    console.log('random word ' +random ) ;
    //show the lenght of the word
    for (var i = 0; i < random.length; i++)
    {
      underScores.push('_');
    }
  //print underscores to puzzle
  puzzle.innerHTML = underScores.join(' ');
  //reset
  }
  //hangman image

  function hangmanImage() {
    if (lives == 5) {
      document.getElementById('stickman').src = '../project/images/tumblr_inline_pg0k73U7BJ1rh6ctt_500 copy 1.png';

    } else if (lives == 4) {
      document.getElementById('stickman').src = '../project/images/tumblr_inline_pg0k73U7BJ1rh6ctt_500 copy 2.png';
    }
    else if (lives == 3) {
      document.getElementById('stickman').src = '../project/images/tumblr_inline_pg0k73U7BJ1rh6ctt_500 copy 3.png';
    }
    else if (lives == 2) {
      document.getElementById('stickman').src = '../project/images/tumblr_inline_pg0k73U7BJ1rh6ctt_500 copy 4.png';
    }
    else if (lives == 1) {
      document.getElementById('stickman').src = '../project/images/tumblr_inline_pg0k73U7BJ1rh6ctt_500 copy 5.png';
    }
    else if (lives == 0) {

      document.getElementById('stickman').src = '../project/images/tumblr_inline_pg0k73U7BJ1rh6ctt_500 copy.png';

    }

  }



  //check if the user has won or lost
  //==================check winning conditions=================
  function winOrLose(){
    if (winCounter === random.length)
    {
      // alert('Congratulations, you have WON!!!');
      winCondition.innerHTML= 'Congratulations, you have WON!!!'
      location.assign('../project/index.html')


    } else if (lives === 0) {
      // alert('You have lost, the word was ' + random )
      winCondition.innerHTML= 'You have lost, the word was ' + random

    }
  }
  //======================Main Game=========================
  //user guesses
  document.onkeypress = function(event)
  {
    userGuess = event.key
    //checks if the letter exists inside the word
    //if it does you get a number greater then -1
      if (random.indexOf(userGuess) > -1){
      for (var i = 0; i < random.length; i++)
      {
        //for random word if the guess equals the random word then go to the underscope and replace with the word
        if (random[i] === userGuess)
        {
            underScores[i] = userGuess
            winCounter++;
            console.log(underScores);
            winOrLose();

        }
      }
    }
    //if it doesn't
      else {
      wrongLetter.push(userGuess)
      //reduce life if guess is incorrect
      if (lives > 0 ) {
        lives--;
        wordsUsed.innerHTML = wrongLetter.join(' ')
        livesLost.innerHTML = lives
      }
      hangmanImage();
      console.log(lives);
      console.log(wrongLetter)
      winOrLose();
      }

  //print typed letters and wrong letters
   puzzle.innerHTML = underScores.join(' ')

  }
  startGame();
})
