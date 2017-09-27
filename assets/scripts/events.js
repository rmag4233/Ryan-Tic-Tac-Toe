'use strict'
const playerX = 'X'
const playerO = 'O'
let winner = ''

let currentPlayer = playerX

const game = ['', '', '', '', '', '', '', '', '']

const playGame = function (event) {
  event.preventDefault()
  const data = event.target
  const id = data.id
  if (winner === '') {
    if (game[id].length < 1) {
      if (currentPlayer === playerX) {
        $(data).text('X')
        game[id] = 'X'
      } else if (currentPlayer === playerO) {
        $(data).text('O')
        game[id] = 'O'
      }
    }
  } console.log(game)
  checkForWinner()
  switchPlayer()
}

const switchPlayer = function () {
  if (currentPlayer === playerX) {
    currentPlayer = playerO
  } else currentPlayer = playerX
  $('#whoseTurn').text('Player ' + currentPlayer + '\'s turn')
}

const checkForWinner = function () {
  switch (true) {
    case (game[0] === game[1] && game[1] === game[2] && game[0] === game[2]):
      winner = game[0]
      console.log('Winner is ', winner)
      break
    case (game[3] === game[4] && game[4] === game[5] && game[3] === game[5] && game[3] !== ''):
      winner = game[3]
      console.log('Winner is ', winner)
      break
    case (game[6] === game[7] && game[7] === game[8] && game[6] === game[8] && game[6] !== ''):
      winner = game[6]
      console.log('Winner is ', winner)
      break
    case (game[0] === game[3] && game[3] === game[6] && game[0] === game[6] && game[3] !== ''):
      winner = game[0]
      console.log('Winner is ', winner)
      break
    case (game[1] === game[4] && game[4] === game[7] && game[1] === game[7] && game[1] !== ''):
      winner = game[1]
      console.log('Winner is ', winner)
      break
    case (game[2] === game[5] && game[5] === game[8] && game[2] === game[8] && game[2] !== ''):
      winner = game[2]
      console.log('Winner is ', winner)
      break
    case (game[0] === game[4] && game[4] === game[8] && game[0] === game[8] && game[0] !== ''):
      winner = game[0]
      console.log('Winner is ', winner)
      break
    case (game[2] === game[4] && game[4] === game[6] && game[2] === game[6] && game[2] !== ''):
      winner = game[2]
      console.log('Winner is ', winner)
      break
    case (!game.includes('')):
      winner = false
      console.log('Winner is ', winner)
      break
    default:
      console.log('Keep Playing')
  }
}

const addHandlers = function () {
  $('.square').on('click', playGame)
}

module.exports = {
  addHandlers
}
