[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# About The Game

This is a web-based take on the classic game - tic-tac-toe. The game requires a user to sign up and sign in before being able to start a game. The site connects to a an api that stores both user information and game state, allowing user to view their stats (including games played, games completed and games that are started but not complete) as well as retrieve and play games that they had previously started without finishing.



## Technologies Used

1. HTML5
2. CSS3
3. JavaScript
4. jQuery/DOM manipulation
5. ajax requests to an api

## Planning Phase

The planning phase of this game started when I found out that the first project would be a tic-tac-toe game. Immediately, I started thinking about how the subjects covered in class could apply to solving the problem of creating an interactive tic-tac-toe game. My approach was to start small, understanding that despite the seemingly simple nature of the task at hand, there could be gotchas along the way. Fortunately, through wire framing and writing user stories, I was able to develop a strategy for how to start the game. First, I would create a very basic HTML structure so that I could test my functionality in browser, with minimal styling. I would build my game board, consisting of 9 div elements with unique ID names, so that I could easily keep track of the state of each element by assigning a click event handler to their HTML class. I knew that on the backend I would be creating an empty array to represent the state of the game, with pushes taking place on each valid click. From there, I knew I would need variables to store the current player, playerX, playerO, whether or not there was a winner or if the game was over and functions to play the game, check for a winner and switch the player. From there, constant testing allowed me to get the site in working order with no known user facing issues.

I am most proud of an extra feature I added which allows users to recall games that they have previously started and continue to play it. Parsing the JSON to reconfigure the board was relatively simple, but it took some creativity for me to determine who the current player should be on a retrieved game. While the api stored the state of the game and whether or not it was over, it did not store who the current player was. So, what I did was loop through the retrieved game array, count how many empty spaces there were (determined by the value empty string value in the array) and ran a modulo operator to determine if the count of empty strings was odd or even. If it was odd, the current player would be X (or whomever the first player was) and if it was even, the current player would be o (or whomever the second player was).

## Wireframes and User Stories

Wireframe - https://imgur.com/a/gMYwy
User Stories - https://git.generalassemb.ly/rmag4233/game-project-scope-study/blob/response/study.md
  As a non registered user I want to be able to register to the app so that I can play tic tac toe
  As a registered user I want to be able to sign in to the app so that I can play tic tac toe
  As a registered user I want to be able to access existing games that are not finished so that I can keep playing tic tac toe
  As a registered user I want to know whose turn it is in game so that I know when it's my turn to play
  As a registered user I want to be able to add my player's value (x or o) to the board so that I can play tic tac toe
  As a registered user I want to be able to log out so that I can save the state of my game
  As a registered user I want to be able to see the outcome of a finished game so that I can see who won or if it was a draw.

## Future Iterations

In future iterations of this project, I would like to make the UI sharper and utilize more of the bootstrap functionality available. Additionally, at this point the feature to retrieve a game is useful if you happen to remember the game ID (which is shown to you upon creation of a game) - in the future, I would like to make a clean UI section that allows the user to retrieve their unfinished games.
