'use strict';

//console.log('Hello from the console!!');

let greetingsResponse0 = prompt('What is your name?');
alert('Hello ' + greetingsResponse0 + ', ' + 'nice to have you here!');

// function for question
function askQuestion(questionText, questionCount) {
  let response = prompt(questionText).toLowerCase();
  //console.log('Answer:' + response);

  if (response === 'y') {
    alert('Me too!');
  } else if (response === 'n') {
    alert('Me neither..');
  } else if( questionCount >= 3){
    alert('Too many wrong answers.');

  }else {
    //console.log('invalid');
    alert('Please respond with a \'y\' or \'n\'');
    askQuestion(questionText, ++questionCount);


  }
}


let question1 = 'Do you like ice cream? (y/n)';
let question2 = 'Do you enjoy hot weather? (y/n)';
let question3 = 'Do you watch sports? (y/n)';
let question4 = 'Do you like dogs? (y/n)';
let question5 = 'Are you cool enough to be here? (y/n)';

askQuestion(question1, 1);
askQuestion(question2, 1);
askQuestion(question3, 1);
askQuestion(question4, 1);
askQuestion(question5, 1);

alert('Thank you ' + greetingsResponse0 + ', ' + ' it was nice talking to you, have a nice day!');


const responses = [];

// questions.push(question1);
// questions.push(question2);
// questions.push(question3);



console.log(responses);


