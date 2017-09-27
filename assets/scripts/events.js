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
  if (winner === '') {
    if (currentPlayer === playerX) {
      currentPlayer = playerO
    } else currentPlayer = playerX
    $('#whoseTurn').text('Player ' + currentPlayer + '\'s turn')
  }
}

const checkForWinner = function () {
  switch (true) {
    case (game[0] === game[1] && game[1] === game[2] && game[0] === game[2]):
      winner = game[0]
      $('#whoseTurn').text('Congratulations to Player ' + winner + '! You are the winner!!')
      console.log('Winner is ', winner)
      break
    case (game[3] === game[4] && game[4] === game[5] && game[3] === game[5] && game[3] !== ''):
      winner = game[3]
      $('#whoseTurn').text('Congratulations to Player ' + winner + '! You are the winner!!')
      console.log('Winner is ', winner)
      break
    case (game[6] === game[7] && game[7] === game[8] && game[6] === game[8] && game[6] !== ''):
      winner = game[6]
      $('#whoseTurn').text('Congratulations to Player ' + winner + '! You are the winner!!')
      console.log('Winner is ', winner)
      break
    case (game[0] === game[3] && game[3] === game[6] && game[0] === game[6] && game[3] !== ''):
      winner = game[0]
      $('#whoseTurn').text('Congratulations to Player ' + winner + '! You are the winner!!')
      console.log('Winner is ', winner)
      break
    case (game[1] === game[4] && game[4] === game[7] && game[1] === game[7] && game[1] !== ''):
      winner = game[1]
      $('#whoseTurn').text('Congratulations to Player ' + winner + '! You are the winner!!')
      console.log('Winner is ', winner)
      break
    case (game[2] === game[5] && game[5] === game[8] && game[2] === game[8] && game[2] !== ''):
      winner = game[2]
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
      $('#whoseTurn').text('Congratulations to Player ' + winner + '! You are the winner!!')
      console.log('Winner is ', winner)
      break
    case (!game.includes('')):
      winner = false
      $('#whoseTurn').text('This game ended in a draw. Play again?')
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
