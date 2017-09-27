'use strict'

const signUpSuccess = function (data) {
  $('#messageContent').text('You have signed up as ' + data.user.email + '. Sign in to start playing!')
  console.log(data)
}

const signUpFailure = function (error) {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
