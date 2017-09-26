'use strict'
const playerX = 'x'
const playerO = 'o'

const currentPlayer = playerX

const playGame = function (event) {
  event.preventDefault()
  if (currentPlayer === playerX) {
    $(event.target).text('X')
    console.log(event.target.id)
  } else if (currentPlayer === playerO) {
    $(event.target).text('O')
  }
}

const addHandlers = function () {
  $('.square').on('click', playGame)
}

module.exports = {
  addHandlers
}
