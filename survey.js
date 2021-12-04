const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//Answer 2 : using a function 
/*
let questionsArray = [
  [`What's your name? Nicknames are also acceptable :) `, 'Your name is : '],
  ['What\'s an activity you like doing?', 'The activity that you like doing is: '],
  ['What do you listen to while doing that?', 'You like listen to: '],
  ['Which meal is your favourite (eg: dinner, brunch, etc.)', 'Your favourite meal is: '],
  ['What\'s your favourite thing to eat for that meal?', 'Your favourite food is: '],
  ['Which sport is your absolute favourite?', 'Your favourite sport is: '],
  ['What is your superpower? In a few words, tell us what you are amazing at!', 'Your superpower is: ']
];



const askQuestion = function(index) {
  if (index < questionsArray.length) {
    const questionPattern = questionsArray[index];
    rl.question(questionPattern[0], (answer) => {
      console.log(`${questionPattern[1]} ${answer}`);
      askQuestion(index + 1);
    })
  } else {
    rl.close();
  }
};

askQuestion(0);

*/




//Answer 1: 



let questionsArray = [
  'What\'s your name? Nicknames are also acceptable :)',
  'What\'s an activity you like doing?',
  'What do you listen to while doing that?',
  'Which meal is your favourite (eg: dinner, brunch, etc.)',
  'What\'s your favourite thing to eat for that meal?',
  'Which sport is your absolute favourite?',
  'What is your superpower? In a few words, tell us what you are amazing at!'
];

rl.question(questionsArray[0], (answer) => {
  console.log(`Your name is: ${answer}`);
  rl.question(questionsArray[1], (answer) => {
    console.log(`The activity that you like doing is: ${answer}`);
    rl.question(questionsArray[2], (answer) => {
      console.log(`You like listen to: ${answer}`);
      rl.question(questionsArray[3], (answer) => {
        console.log(`Your favourite meal is: ${answer}`);
        rl.question(questionsArray[4], (answer) => {
          console.log(`Your favourite food is: ${answer}`);
          rl.question(questionsArray[5], (answer) => {
            console.log(`Your favourite sport is: ${answer}`);
            rl.question(questionsArray[6], (answer) => {
              console.log(`Your superpower is: ${answer}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

