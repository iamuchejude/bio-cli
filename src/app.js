const prompt = require('./prompt');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: `What's your name? `,
  }, {
    type: 'input',
    name: 'dob',
    message: `When were you born (YYYY-MM-DD)? `,
  }, {
    type: 'list',
    name: 'gender',
    message: `What's your gender? `,
    choices: [
      'Male',
      'Female',
    ],
  },
];

console.log('\nHello, I am Bio-CLI')
console.log('I can tell how hold you are by the informations you provide :)');
console.log('Press ctrl+c to cancel\n');

prompt(questions);
