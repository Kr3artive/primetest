# PrimeTest

**PrimeTest** is a lightweight, configurable API testing utility designed for Node.js projects. It enables developers to test RESTful endpoints using simple JSON or JS configurations, with clear terminal output for automated or manual testing workflows.


## Installation

To install PrimeTest into your project:

```
npm install @kr3artive/primetest

```

## Usage

1. Create a Configuration File
Create a file named tester.config.js and export an array of test cases:

// tester.config.js
module.exports = [
  {
    name: "GET - Fetch all users",
    method: "GET",
    url: "http://localhost:3000/api/users",
    expectedStatus: 200
  },
  {
    name: "POST - Create user",
    method: "POST",
    url: "http://localhost:3000/api/users",
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      name: "Jane Doe",
      email: "jane@example.com"
    },
    expectedStatus: 201
  },
  {
    name: "PUT - Update user",
    method: "PUT",
    url: "http://localhost:3000/api/users/1",
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      name: "Jane Doe Updated",
      email: "updated@example.com"
    },
    expectedStatus: 200
  },
  {
    name: "DELETE - Remove user",
    method: "DELETE",
    url: "http://localhost:3000/api/users/1",
    expectedStatus: 204
  }
];

2. Create a Test Runner Script
In the root of your project, create a test.js file:

// test.js
const runTests = require('@kr3artive/primetest');
const config = require('./tester.config');

runTests(config);

3. Run the Tests
Use Node.js to run your tests:

node test.js

You’ll see results like:

✅ GET - Fetch all users - 200
✅ POST - Create user - 201
❌ PUT - Update user - 404
↪ Expected: 200, Got: 404
✅ DELETE - Remove user - 204


## Configuration Options

Each test in your config file can include the following:

Field	Type	Required	Description
name	string	✅	A descriptive label for the test case
method	string	✅	HTTP method (GET, POST, PUT, DELETE, etc.)
url	string	✅	Full endpoint URL
headers	object	❌	Optional headers (e.g., Content-Type)
body	object	❌	JSON body for POST/PUT requests
expectedStatus	number	✅	The expected HTTP status code

## Real-World Use Cases

1.Local development testing of Express.js APIs

2.API regression testing during continuous integration

3.Lightweight QA for internal tools and microservices

4.Automated sanity checks before deployment

## Example NPM Script
To streamline usage, add a script to your package.json:

"scripts": {
  "test:api": "node test.js"
}
Then you can run:
npm run test:api


## Roadmap
Planned features for future versions:

 CLI usage: primetest tester.config.js

 JSON & HTML result reports

 Summary stats for passed/failed tests

 Retry & timeout configuration

 Support for grouped test suites

🙌 Contributing
Contributions are welcome and appreciated! Feel free to:

Fork the repo

Submit issues or feature requests

Open pull requests

Let’s build better tools for developers together.

📄 License
This project is licensed under the MIT License.

👨‍💻 Author
Abiye Omiete
GitHub: @Kr3artive
Email: abiyeomiete@gmail.com
NPM: @kr3artive