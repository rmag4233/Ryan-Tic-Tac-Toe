'use strict'

const signUpSuccess = function (data) {
  console.log(data)
}

const signUpFailure = function (error) {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
