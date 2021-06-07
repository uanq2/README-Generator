const inquirer = require('inquirer');
const fs = require('fs');

const generateMD = (answers) => {
  return `# ${answers.name}

## Description
${answers.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${answers.installation}
    
## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions please contact me via GitHub at ${answers.github}] or via email at ${answers.email}.`
};

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project.',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe what was your motivation and reason for this project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use. Include screenshots as needed.'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license.',
      choices: ['MIT', 'GPL', 'Apache', 'none']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'If you would like other developers to contribute to your application or package, include guidelines here.'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Does your application need any tests.'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub user name.'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address.'
    },
  ])
  .then((answers) => {
    const readMeContent = generateMD(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
