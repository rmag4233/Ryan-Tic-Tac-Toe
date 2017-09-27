'use strict'
const playerX = 'x'
const playerO = 'o'

let currentPlayer = playerX

const game = ['', '', '', '', '', '', '', '', '']

const playGame = function (event) {
  event.preventDefault()
  const data = event.target
  const id = data.id
  if (game[id].length < 1) {
    if (currentPlayer === playerX) {
      $(data).text('X')
      game[id] = 'X'
      console.log(game)
    } else if (currentPlayer === playerO) {
      $(data).text('O')
      game[id] = 'O'
    }
  } switchPlayer()
}

const switchPlayer = function () {
  if (currentPlayer === playerX) {
    currentPlayer = playerO
  } else currentPlayer = playerX
}

const addHandlers = function () {
  $('.square').on('click', playGame)
}

module.exports = {
  addHandlers
}
