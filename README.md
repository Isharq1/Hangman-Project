# Hangman-project

Hangman is a game that has been around since the 18th century. Traditionally it was a game that would decide the fate of criminals that were given the death sentences and was called 'Rite of Words and Life'. This game has carried on but instead of real lives being lost it used to be played on paper and a stickman was drawn out. this game is still popular today with over a thousand games similar to this on the app-store.

## Tools used

The game was created using three basic languages

* **HTML**: Two HTML files were created, one was for the introduction page named index.html and the other for the main game called page1.html. These HTML files provide the content for the game.
* **CSS**: The content was styled using CSS. there were two CSS files created and bootstrap was used to add a pop-over feature on the introduction page.
* **Javascript**: Javascrpt was used only on the main game to interact with the content on the HTML page for example guessing the letter in hangman.

## How To Play

* The player is asked to choose a category and a random word is choosen from the catergory.
* The player is given a specific amount of lives depending on the difficulty level choosen.
* If the player choices medium they have 7 lives to guess the word using the keyboard.
* Each time they guess the letter wrong it is stored in the incorrect letter box, a life is lost and a stage of the hangman image is displayed.
* If the player guesses right then that word is displayed in the word needed to be guessed represented by an underscore.
* If the word is guessed before the lives run out then the player wins otherwise the player loses.

## The Game

Below there are screenshots on how the game is played.

![intro-page](images/intro-page)

* Click PLAY to start the game and click the ? icon to know how to play

![Category-page](images/category-page)

* Can click animals and all the animal words will show up or click cars and all the car words will show up.

![Game-page](images/game-page)

* This page will not start unless you choose a difficulty level that will display the lives at the top of the page.
* The red box is where the incorrect letter go into and the underscore show the lenght of the word needed to be guessed.
* Main-menu will take you back to the intro page and reset will reset the game back to the category page.

![Level-page](images/show-lives)

* The difficulty levels display the lives left. Hard= 5 lives Medium= 7 lives and Easy= 9 lives

# How the Game was created

Firstly i tried to understand the concept of the game so i created no CSS and HTML, i created it completely on javascript where alerts and prompt windows were created taht would prompt you for a letter and return it to the word if it was correct up untill the word was guessed, this basic code was then expanded on to create the hangman game. This resembles the Agile method of tackling a task.

## Full game development process

* Firstly as mentioned the Javascript was created as a prompt and alert command widow.
* Then the code was split into section to make the code more readable.
* Variable were at the top, followed by innerHTML changes and Eventlistener.
* Then the main section was split into three sections called 'upon game start', 'main game', 'check winning conditions'.
* Finally the HTML and Basic CSS was created and the code was expanded on. With the functions created in the following order;

**1.Startgame function**

**2.Onkeydown function( keyboard being pressed)**

**3.Win or lose condition**

**4.Hangman image change**

**5. Difficulty level**

**6.Category function** 

## Issues whilst coding

There was some issues that came up whilst creating the game this was dealt with buy researching techniques on fixing the problem and seeing what other people did when the came across a similiar problem.

* The first problem that i came across what the onkeydown function. The keys would work on the game but was not limited to the alphabetical values therefore i gave each key an assigned number as an object and then i set the limits to the number of each key as an if statement and then called the function when every the key was in use.
* Another problem i came across was, when i was adding the difficulty level it would add lives each time the button was being pressed and this could be pressed any time in the game therefore i added a .disable function to the easy, medium and hard buttons so once any of these three buttons was clicked it disabled the rest from being clicked.
* I didnt want to create a different HTML file for the category page so i added the category window in the z-index plus one, the problem was with getting rid of this button once the category was choosen. Looking back at my notes i realized i needed to add a .remove function and make category function the child of a different div so i can remove the child from the parent.
* When the game finished the user was still allowed to type in the command function i wanted to stop this and only allow the user to press play again once the game had finished. therefore i added an if statement saying if the lives>0 then the user can input a letter, also for the victory condition i added a onkeypress return false, so after the game is won the keyboard unfunctional.

## Future improvements

Even though the project has finished i didnt get all the tasks set by myself so i will be going back over the project and trying to add these functions.

* I wanted to include a mode called challenge mode as shown in the screenshots above. this mode would act as the opposite to hangman where the user is given a single letter in the alphabet and they have to try and go through the other 25 letter without getting this letter if they accomplish this they will win the game but if they guess the letter they lose. I commented my try in the code above will try to expand on this in the future.
* Another improvement to make the game whole would be to add sound in the game, every game has some aspect of sound to it and i didnt get around to adding this, also due to chrome not allowing autoplay. But i will add sound to the game to make it feel more like a game in the future.
* Finally i would have liked to add a multiplier or a score sheet to make the game more competetive, in this game the user has to click play again to reset the game but adding the score sheet will add a score if the user won the game and decrease the score if the user had lost.
* Add more categories.

