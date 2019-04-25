document.addEventListener("DOMContentLoaded", function(){
  // create an array of words
  var animals = ['llama', 'octopus', 'elephant', 'bear', 'jerobe' , 'snake', 'canary', 'snail', 'giraffe', 'ram', 'cow', 'lion', 'alligator', 'tiger', 'monkey', 'beaver', 'zebra', 'deer', 'penguin', 'cockroach', 'chicken', 'jaguar', 'whale', 'butterfly', 'cougar', 'jellyfish', 'shark', 'kangaroo', 'mouse', 'lizard']
  var cars = ['ferrari', 'lamborghini', 'buggati', 'zonda', 'saleen', 'tesla', 'mercedes','toyota','peugeot', 'mclaren', 'lexus', 'lancia', 'koenigsegg', 'jeep', 'honda', 'infiniti', 'jaguar', 'nissan', 'ford', 'seat', 'citreon', 'porsche', 'shelby', 'dodge', 'daewoo']
  var keyCodes = { 65: "a", 66: "b", 67: "c", 68: "d", 69: "e", 70: "f", 71: "g", 72: "h", 73: "i", 74: "j", 75: "k", 76: "l", 77: "m", 78: "n", 79: "o", 80: "p", 81: "q", 82: "r", 83: "s", 84: "t", 85: "u", 86: "v", 87: "w", 88: "x", 89: "y",90: "z"}

  //variables
  var keysPressed = [];
  var wrongLetter = [];
  var lives;
  var underScores = [];
  var userGuess = [];
  var random;
  var winCounter = 0;
  // var validChar =new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");

  //innerHTML changes
  var livesLost=document.getElementById('count')
  var puzzle =document.getElementById('puzzle');
  var wordsUsed =document.getElementById('wordsUsed');
  var hangman = document.getElementById('stickman').src;
  var winCondition =document.getElementById('message');
  var endGame=document.getElementById('endGame');
  var overlayer = document.getElementById('overlayer');
  // var btnAnimals = document.getElementById('catAnimals')
  // var btnCars = document.getElementById('catCars')


  document.getElementById("medium").addEventListener("click", medium);
  document.getElementById("hard").addEventListener("click", hard);
  document.getElementById("easy").addEventListener("click", easy);
  document.getElementById("catAnimals").addEventListener("click", catAnimals);
  document.getElementById("catCars").addEventListener("click", catCars);

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

  function catAnimals() {
    var parent = overlayer.parentNode;
    parent.removeChild(overlayer)
    startGame();
    endGame.innerHTML= 'Animals'
  }
  function catCars() {
    var parent = overlayer.parentNode;
    parent.removeChild(overlayer)
    startGame2();
    endGame.innerHTML= 'Cars'
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
  }

  function startGame2(){
    random = cars[Math.floor( Math.random()*cars.length)];
    console.log('random word ' +random ) ;
    //show the lenght of the word
    for (var i = 0; i < random.length; i++)
    {
      underScores.push('_');
    }
  //print underscores to puzzle
  puzzle.innerHTML = underScores.join(' ');
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
    if (winCounter === random.length)
    {
      endGame.innerHTML= 'Congratulations, you have WON!!!'
      document.onkeypress = function(event){
        return false;
      }



    } else if (lives === 0) {
      // alert('You have lost, the word was ' + random )
      endGame.innerHTML= 'You have lost, the word was ' + random
      // location.assign('../project/index.html')
    }
  }
  //======================Main Game=========================
  //user guesses

  document.onkeydown = function(e)
  {
    userGuess = e.keyCode
    if (userGuess > 64 && userGuess < 95){

      //checks if the letter exists inside the word
      //if it does you get a number greater then -1
      if (random.indexOf(keyCodes[userGuess]) > -1){
        for (var i = 0; i < random.length; i++)
        {
          //for random word if the guess equals the random word then go to the underscope and replace with the word
          if (random[i] === keyCodes[userGuess] & lives>0)
          {
            underScores[i]= keyCodes[userGuess];
            winCounter++;
            console.log(underScores);
            puzzle.innerHTML = underScores.join(' ')
            winOrLose();


          }
        }
      }
      //if it doesn't
      else if (lives>0) {
        wrongLetter.push(keyCodes[userGuess])
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
    }

  }
  // startGame();
})
