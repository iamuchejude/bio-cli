const { prompt } = require('inquirer');
const process = require('./process');

const PROMPT = questions => {
  prompt(questions)
    .then(answers => {
      process(answers, (err, result) => {
        if (err) {
          return console.log(`\n${err.join('\n\n')}`);
        }

        return console.log(`\n${result}`);
      });
    })
    .catch(error =>  console.log(error));
}

module.exports = PROMPT;
