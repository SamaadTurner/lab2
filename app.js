'use strict';

//console.log('Hello from the console!!');

let questionArray = [
  'Do I like ice cream? (y/n)',
  'Do I enjoy summer? (y/n)',
  'Do I watch sports? (y/n)',
  'Do I like dogs? (y/n)',
  'Do I think Im cool enough to be here? (y/n)'
];

let answersArray = [
  'y',
  'y',
  'y',
  'n',
  'y'
];

let score = 0;


let greetingsResponse0 = prompt('What is your name?');

alert('Hello ' + greetingsResponse0 + ', ' + 'nice to have you here!');


// function for question
function askQuestion(questionText, answer) {
  let response = prompt(questionText).toLowerCase();
  //console.log('Answer:' + response);

  if (response === answer) {
    alert('Thats correct!');
    score++;
  }else {
    //console.log('invalid');.
    alert('Thats not correct...');
  }

}
// Yes/No questions
for(let position = 0; position<questionArray.length; position++){

  askQuestion(questionArray[position], answersArray[position], 1);
}
// Guess Number Question
function guessNumber() {
  let correctNumber = 7;
  let maxAttempts = 4;
  let attempt;
  for(attempt = 1; attempt <= maxAttempts; attempt++){
    let userGuess = parseInt(prompt('Guess a number (between 1 and 15):'));

    if (userGuess === correctNumber) {
      alert('Congratulations! You guessed the correct number.');
      score++;
      break;
    } else if (userGuess < correctNumber) {
      alert('Too low! Try again.');
    } else {
      alert('Too high! Try again.');
    }
  }

  if ( attempt > maxAttempts) {
    alert('Sorry, you have exhausted all attempts. The correct number was ' + correctNumber + '.');
  }
}

guessNumber();


let possibleAnswers = ['yellow', 'purple', 'gold'];
let userAttempts = 6;
let correctGuess = false;


let userAnswer = prompt('Guess a color:').toLowerCase();

for (let attemptColorGame = 1; attemptColorGame <= userAttempts; attemptColorGame++) {


  for (let i = 0; i < possibleAnswers.length; i++) {
    if (userAnswer === possibleAnswers[i]) {
      correctGuess = true;
      score++;
      break;
    }
  }

  if (correctGuess) {
    break;
  } else {
    userAnswer = prompt('Wrong answer! Try again:').toLowerCase();
  }
}

if (correctGuess) {
  alert('Congratulations! You guessed correctly.');
} else {
  alert('Sorry, you have run out of attempts. The correct answers were: ' + possibleAnswers.join(', '));
}


alert('All possible answers: ' + possibleAnswers);





// Displaying the final score
alert('Your final score is: ' + score + ' out of 7.');


alert('Thank you ' + greetingsResponse0 + ', ' + ' it was nice talking to you, have a nice day!');




