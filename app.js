const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

const licenseBadges = {
    'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'GPLv3': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'Apache-2.0': '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
    'BSD-3-Clause': '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)',
    'none': ''
};

app.post('/generate', (req, res) => {
    const { title, description, installation, usage, contributing, tests, license, github, email } = req.body;

    const readme = `
# ${title}

${licenseBadges[license]}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
This project is licensed under the ${license !== 'none' ? license : 'No license'}.

## Contributing
${contributing}

## Tests
${tests}

## Questions
For any additional questions, reach me at [${email}](mailto:${email}).  
Visit my GitHub: [${github}](https://github.com/${github})
`;

    res.json({ readme });
});

app.listen(PORT, () => {
    console.log(`🚀 iREAD Server is running at http://localhost:${PORT}`);
});
