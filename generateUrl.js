function randomLetter(string) {
  const index = Math.floor(Math.random() * string.length)
  return string[index]
}

function generateUrl() {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const letters = lowerCaseLetters + upperCaseLetters + numbers

  let randomStr = ""
  for (i = 0; i < 5; i++) {
    randomStr += randomLetter(letters)
  }
  return outputUrl = `http://localhost:3001/${randomStr}`
}

module.exports = generateUrl

