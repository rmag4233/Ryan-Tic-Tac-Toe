'use strict'

const getFormFields = require(`../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
  console.log(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const authHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
}

module.exports = {
  authHandlers
}
