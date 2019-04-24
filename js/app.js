document.addEventListener("DOMContentLoaded", function(){
  // create an array of words
  var animals = ['llama', 'octopus', 'elephant', 'bear', 'jerobe' , 'snake', 'canary', 'snail', 'giraffe', 'ram', 'cow', 'lion', 'alligator', 'tiger', 'monkey', 'beaver', 'zebra', 'deer', 'penguin', 'cockroach', 'chicken', 'jaguar', 'whale', 'butterfly', 'cougar', 'jellyfish', 'shark', 'kangaroo', 'mouse', 'lizard']
  // var cars = ['ferrari', 'lamborghini', 'buggati', 'zonda', 'saleen', 'tesla', 'mercedes' ]

  //variables
  var wrongLetter = []
  var lives;
  var underScores = [];
  var userGuess = [];
  var random;
  var winCounter = 0;
  var loseCounter = 0;
  // var validChar =new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");

  //innerHTML changes
  var livesLost=document.getElementById('count')
  var puzzle =document.getElementById('puzzle');
  var wordsUsed =document.getElementById('wordsUsed');
  var hangman = document.getElementById('stickman').src;
  var winCondition =document.getElementById('message');


  document.getElementById("medium").addEventListener("click", medium);
  document.getElementById("hard").addEventListener("click", hard);
  document.getElementById("easy").addEventListener("click", easy);
  //=====================Upon starting new game=================
  function easy() {
   lives =9
   livesLost.innerHTML = 9;
   document.getElementById('easy').disabled = true;
   document.getElementById('medium').disabled = true;
   document.getElementById('hard').disabled = true;
  }
  function medium() {
    lives = 7
   livesLost.innerHTML = 7 ;
   document.getElementById('easy').disabled = true;
   document.getElementById('medium').disabled = true;
   document.getElementById('hard').disabled = true;

  }
  function hard() {
    lives=5
   livesLost.innerHTML = 5;
   document.getElementById('easy').disabled = true;
   document.getElementById('medium').disabled = true;
   document.getElementById('hard').disabled = true;
  }

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
    if (lives == 8) {
      document.getElementById('stickman').src = '../project/images/tumblr_inline_pg0k73U7BJ1rh6ctt_500 copy 2.png';

    } else if (lives == 7) {
      document.getElementById('stickman').src = '../project/images/tumblr_inline_pg0k73U7BJ1rh6ctt_500 copy 3.png';
    }
    else if (lives == 6) {
      document.getElementById('stickman').src = '../project/images/tumblr_inline_pg0k73U7BJ1rh6ctt_500 copy 4.png';
    }
    else if (lives == 5) {
      document.getElementById('stickman').src = '../project/images/tumblr_inline_pg0k73U7BJ1rh6ctt_500 copy 5.png';
    }
    else if (lives == 4) {
      document.getElementById('stickman').src = '../project/images/tumblr_inline_pg0k73U7BJ1rh6ctt_500 copy 6.png';
    }
    else if (lives == 3) {

      document.getElementById('stickman').src = '../project/images/tumblr_inline_pg0k73U7BJ1rh6ctt_500 copy 7.png';

    }
    else if (lives == 2) {

      document.getElementById('stickman').src = '../project/images/tumblr_inline_pg0k73U7BJ1rh6ctt_500 copy 8.png';

    }
    else if (lives == 1) {

      document.getElementById('stickman').src = '../project/images/tumblr_inline_pg0k73U7BJ1rh6ctt_500 copy 9.png';

    }
    else if (lives == 0) {

      document.getElementById('stickman').src = '../project/images/tumblr_inline_pg0k73U7BJ1rh6ctt_500 copy 10.png';

    }

  }





  //check if the user has won or lost
  //==================check winning conditions=================
  function winOrLose(){
    if (winCounter == random.length)
    {

      winCondition.innerHTML= 'Congratulations, you have WON!!!'
      // if (userGuess = 1) {
      //   location.assign('../project/index.html')
      // }


    } else if (lives === 0) {
      // alert('You have lost, the word was ' + random )
      winCondition.innerHTML= 'You have lost, the word was ' + random
      // location.assign('../project/index.html')

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
        if (random[i] === userGuess & lives>1)
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
