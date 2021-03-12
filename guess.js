function guess
let userGuess = 1000;
secret = 5000;

if (userGuess < secret) {
  console.log('Too small!')
}
else if (userGuess > secret) {
  console.log('Too big!')
}
else (userGuess === secret) {
  console.log('You win')
}
