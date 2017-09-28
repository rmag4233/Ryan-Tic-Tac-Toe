'use strict'
const store = require('./store')
const api = require('./api')

const playerX = 'X'
const playerO = 'O'
let winner = ''
let over = false
let text = ''

let currentPlayer = playerX

let game = ['', '', '', '', '', '', '', '', '']

const playGame = function (event) {
  event.preventDefault()
  const data = event.target
  const id = data.id
  if (store.user !== undefined && store.user !== null) {
    if (store.currentGame !== undefined && store.currentGame !== null) {
      if (winner === '') {
        if (game[id].length < 1) {
          if (currentPlayer === playerX) {
            $(data).text('X')
            game[id] = 'X'
            text = $(event.target).text()
            console.log(text)
          } else if (currentPlayer === playerO) {
            $(data).text('O')
            game[id] = 'O'
            text = $(event.target).text()
            console.log(text)
          } checkForWinner()
          switchPlayer()
          api.updateGame(id, text, over)
          $('#logIn').text('Good luck!')
        } else if (game[id].length >= 1) {
          $('#logIn').text('This square has already been played. Please try again!')
        }
      }
    }
  }
}

const switchPlayer = function () {
  if (winner === '' && store.user !== undefined) {
    if (currentPlayer === playerX) {
      currentPlayer = playerO
    } else currentPlayer = playerX
    $('#whoseTurn').text('Player ' + currentPlayer + '\'s turn')
  }
}

const checkForWinner = function () {
  switch (true) {
    case (game[0] === game[1] && game[1] === game[2] && game[0] === game[2] && game[0] !== ''):
      winner = game[0]
      over = true
      $('#whoseTurn').text('Congratulations to Player ' + winner + '! You are the winner!!')
      console.log('Winner is ', over)
      break
    case (game[3] === game[4] && game[4] === game[5] && game[3] === game[5] && game[3] !== ''):
      winner = game[3]
      over = true
      $('#whoseTurn').text('Congratulations to Player ' + winner + '! You are the winner!!')
      console.log('Winner is ', winner)
      break
    case (game[6] === game[7] && game[7] === game[8] && game[6] === game[8] && game[6] !== ''):
      winner = game[6]
      over = true
      $('#whoseTurn').text('Congratulations to Player ' + winner + '! You are the winner!!')
      console.log('Winner is ', winner)
      break
    case (game[0] === game[3] && game[3] === game[6] && game[0] === game[6] && game[3] !== ''):
      winner = game[0]
      over = true
      $('#whoseTurn').text('Congratulations to Player ' + winner + '! You are the winner!!')
      console.log('Winner is ', winner)
      break
    case (game[1] === game[4] && game[4] === game[7] && game[1] === game[7] && game[1] !== ''):
      winner = game[1]
      over = true
      $('#whoseTurn').text('Congratulations to Player ' + winner + '! You are the winner!!')
      console.log('Winner is ', winner)
      break
    case (game[2] === game[5] && game[5] === game[8] && game[2] === game[8] && game[2] !== ''):
      winner = game[2]
      over = true
      $('#whoseTurn').text('Congratulations to Player ' + winner + '! You are the winner!!')
      console.log('Winner is ', winner)
      break
    case (game[0] === game[4] && game[4] === game[8] && game[0] === game[8] && game[0] !== ''):
      winner = game[0]
      $('#whoseTurn').text('Congratulations to Player ' + winner + '! You are the winner!!')
      console.log('Winner is ', winner)
      break
    case (game[2] === game[4] && game[4] === game[6] && game[2] === game[6] && game[2] !== ''):
      winner = game[2]
      over = true
      $('#whoseTurn').text('Congratulations to Player ' + winner + '! You are the winner!!')
      console.log('Winner is ', winner)
      break
    case (!game.includes('')):
      winner = false
      over = true
      $('#whoseTurn').text('This game ended in a draw. Play again?')
      break
    default:
      console.log('Keep Playing')
  }
}

const playAgain = function (event) {
  event.preventDefault()
  console.log('I think this is working')
  $('.square').text('')
  game = ['', '', '', '', '', '', '', '', '']
  winner = ''
  over = false
  currentPlayer = playerX
  console.log('Game is ', over)
}

const addHandlers = function () {
  $('.square').on('click', playGame)
  $('#play-again').on('submit', playAgain)
}

module.exports = {
  addHandlers
}
