document.addEventListener("DOMContentLoaded", function(){
  // create an array of words
  var animals = ['llama', 'octopus', 'elephant', 'bear', 'jerobe' , 'snake', 'canary', 'snail', 'giraffe', 'ram', 'cow', 'lion', 'alligator', 'tiger', 'monkey', 'beaver', 'zebra', 'deer', 'penguin', 'cockroach', 'chicken', 'jaguar', 'whale', 'butterfly', 'cougar', 'jellyfish', 'shark', 'kangaroo', 'mouse', 'lizard'];

  var cars = ['ferrari', 'lamborghini', 'bugatti', 'zonda', 'saleen', 'tesla', 'mercedes','toyota','peugeot', 'mclaren', 'lexus', 'lancia', 'koenigsegg', 'jeep', 'honda', 'infiniti', 'jaguar', 'nissan', 'ford', 'seat', 'citroen', 'porsche', 'shelby', 'dodge', 'daewoo'];

  // var challenge = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];

  //keycode for the letter on the keyboard.
  var keyCodes = { 65: "a", 66: "b", 67: "c", 68: "d", 69: "e", 70: "f", 71: "g", 72: "h", 73: "i", 74: "j", 75: "k", 76: "l", 77: "m", 78: "n", 79: "o", 80: "p", 81: "q", 82: "r", 83: "s", 84: "t", 85: "u", 86: "v", 87: "w", 88: "x", 89: "y",90: "z"}

  //variables
  var wrongLetter = [];
  var lives;
  // var lives2;
  var underScores = [];
  var userGuess = [];
  var random;
  var winCounter = 0;
  // var winCounter2 = 0;


  //innerHTML changes
  var livesLost=document.getElementById('count')
  var puzzle =document.getElementById('puzzle');
  var wordsUsed =document.getElementById('wordsUsed');
  var hangman = document.getElementById('stickman').src;
  var reset = document.getElementById('reset');
  var endGame=document.getElementById('endGame');
  var overlayer = document.getElementById('overlayer');
  // var cat =document.getElementById('cat');


  //when the button is clicked it will do something
  document.getElementById("medium").addEventListener("click", medium);
  document.getElementById("hard").addEventListener("click", hard);
  document.getElementById("easy").addEventListener("click", easy);
  document.getElementById("catAnimals").addEventListener("click", catAnimals);
  document.getElementById("catCars").addEventListener("click", catCars);
  // document.getElementById("catChallenge").addEventListener("click", catChallenge);

  //=====================Upon starting new game=================
  //choice a category
  function catAnimals() {
    var parent = overlayer.parentNode;
    parent.removeChild(overlayer)
    startGame();
    lives=0
    cat.innerHTML= ': ANIMAlS'
  }
  function catCars() {
    var parent = overlayer.parentNode;
    parent.removeChild(overlayer)
    startGame2();
    lives=0
    cat.innerHTML= ': CARS'
  }
  // function catChallenge() {
  //   var parent = overlayer.parentNode;
  //   parent.removeChild(overlayer)
  //   startGame3();
  //   cat.innerHTML= ': Challenge'
  //   lives2 = 25;
  //   document.getElementById('easy').disabled = true;
  //   document.getElementById('medium').disabled = true;
  //   document.getElementById('hard').disabled = true;
  // }

  // choice a difficulty mode
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
  // function startGame3(){
  //   random = challenge[Math.floor( Math.random()*challenge.length)];
  //   console.log('random word ' +random ) ;
  //   //show the lenght of the word
  //   for (var i = 0; i < random.length; i++)
  //   {
  //     underScores.push('_');
  //   }
  // //print underscores to puzzle
  // puzzle.innerHTML = underScores.join(' ');
  // }

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
          if (random[i] === keyCodes[userGuess] & lives>0 )
          {
            underScores[i]= keyCodes[userGuess];
            winCounter++;
            // winCounter2++;
            console.log(underScores);
            puzzle.innerHTML = underScores.join(' ')
            winOrLose();
            // winOrLose2();


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
        // lives2--;
        // wordsUsed.innerHTML = wrongLetter.join(' ')
        // if (lives>9) {
        //   livesLost.innerHTML = lives2
        //
        // }else {
        //   livesLost.innerHTML = lives
        // }
        hangmanImage();
        console.log(lives);
        console.log(wrongLetter)
        winOrLose();
        // winOrLose2();
      }

      //print typed letters and wrong letters
    }

  }
  //show hangman image when lives have decreased
  function hangmanImage() {
    if (lives == 8) {
      document.getElementById('stickman').src = '../images/tumblr_inline_pg0k73U7BJ1rh6ctt_500 copy 2.png';

    } else if (lives == 7) {
      document.getElementById('stickman').src = '../images/tumblr_inline_pg0k73U7BJ1rh6ctt_500 copy 3.png';
    }
    else if (lives == 6) {
      document.getElementById('stickman').src = '../images/tumblr_inline_pg0k73U7BJ1rh6ctt_500 copy 4.png';
    }
    else if (lives == 5) {
      document.getElementById('stickman').src = '../images/tumblr_inline_pg0k73U7BJ1rh6ctt_500 copy 5.png';
    }
    else if (lives == 4) {
      document.getElementById('stickman').src = '../images/tumblr_inline_pg0k73U7BJ1rh6ctt_500 copy 6.png';
    }
    else if (lives == 3) {

      document.getElementById('stickman').src = '../images/tumblr_inline_pg0k73U7BJ1rh6ctt_500 copy 7.png';

    }
    else if (lives == 2) {

      document.getElementById('stickman').src = '../images/tumblr_inline_pg0k73U7BJ1rh6ctt_500 copy 8.png';

    }
    else if (lives == 1) {

      document.getElementById('stickman').src = '../images/tumblr_inline_pg0k73U7BJ1rh6ctt_500 copy 9.png';

    }
    else if (lives == 0) {

      document.getElementById('stickman').src = '../images/tumblr_inline_pg0k73U7BJ1rh6ctt_500 copy 10.png';

    }

  }

  //==================check winning conditions=================
  function winOrLose(){
    if (winCounter === random.length)
    {
      endGame.innerHTML= 'Congratulations, you have WON!!!'
      document.onkeypress = function(event){
        return false;
      }
      reset.innerHTML = 'PLAY AGAIN'



    }
    else if (lives === 0) {
      // alert('You have lost, the word was ' + random )
      endGame.innerHTML= 'You have lost, the word was ' + random
      // location.assign('../project/index.html')
        reset.innerHTML = 'PLAY AGAIN'
    }
  }
  // function winOrLose2(){
  //   if (lives2 === 0)
  //   {
  //     endGame.innerHTML= 'Congratulations, you have WON!!!'
  //     document.onkeypress = function(event){
  //       return false;
  //     }
  //     reset.innerHTML = 'PLAY AGAIN'
  //
  //
  //
  //   }
  //   else if (winCounter2 === random.length) {
  //     // alert('You have lost, the word was ' + random )
  //     endGame.innerHTML= 'You have lost,TRY AGAIN'
  //     document.onkeypress = function(event){
  //       return false;
  //     }
  //     // location.assign('../project/index.html')
  //       reset.innerHTML = 'PLAY AGAIN'
  //   }
  // }
})
