const inquirer = require('inquirer');
const fs = require('fs');

const generateMD = (answers) => {

  `##${answers.name}
  *${answers.motivation}
  *${answers.reason}
  *${answers.solution}
  *${answers.learn}
  *${answers.license}
  *${answers.github}
  *${answers.email}`
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'motivation',
      message: 'What was your motivation?',
    },
    {
      type: 'input',
      name: 'reason',
      message: 'Why did you build this project?',
    },
    {
      type: 'input',
      name: 'solution',
      message: 'What problem does it solve?',
    },
    {
      type: 'input',
      name: 'learn',
      message: 'What did you learn?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license did you use?',
      choices: ['MIT', 'GPL', 'Apache', 'none'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your E-Mail?',
    },

  ])
  .then((answers) => {
    const readMeContent = generateMD(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
