# PrimeTest

**PrimeTest** is a lightweight and configurable API testing utility for Node.js projects. It allows developers to test RESTful endpoints with minimal setup using clean JSON or JS-based configuration, making it ideal for automation, regression testing, or manual verification during development.

---

## Installation

Install **PrimeTest** as a development dependency:

```bash
npm install @kr3artive/primetest
```

---

## Usage

### 1. Create a Configuration File

Create a file named `tester.config.js` in your project root:

```js
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
```

---

### 2. Create a Test Runner Script

In your project root, create a `test.js` file:

```js
// test.js
const runTests = require('@kr3artive/primetest');
const config = require('./tester.config');

runTests(config);
```

---

### 3. Run Your Tests

Use Node.js to run your test script:

```bash
node test.js
```

You’ll see output like:

```bash
✅ GET - Fetch all users - 200
✅ POST - Create user - 201
❌ PUT - Update user - 404
↪ Expected: 200, Got: 404
✅ DELETE - Remove user - 204
```

---

## Configuration Options

Each test object in your config file can include:

| Field           | Type     | Required | Description                                 |
|----------------|----------|----------|---------------------------------------------|
| `name`          | `string` | ✅       | A descriptive label for the test case       |
| `method`        | `string` | ✅       | HTTP method (GET, POST, PUT, DELETE, etc.)  |
| `url`           | `string` | ✅       | Full endpoint URL                           |
| `headers`       | `object` | ❌       | Optional request headers                    |
| `body`          | `object` | ❌       | JSON body for POST/PUT requests             |
| `expectedStatus`| `number` | ✅       | The expected HTTP status code               |

---

## Real-World Use Cases

- Local development testing of Express.js or REST APIs  
- API regression tests in CI/CD pipelines  
- Lightweight QA for internal tools and microservices  
- Automated sanity checks before deployments  

---

## Example NPM Script

To streamline test execution, add this to your `package.json`:

```json
"scripts": {
  "test:api": "node test.js"
}
```

Then run tests using:

```bash
npm run test:api
```

---

## Roadmap

Planned features for future versions:

- ✅ CLI usage: `primetest tester.config.js`  
- ✅ JSON & HTML result output  
- ✅ Summary stats (pass/fail count)  
- ✅ Retry and timeout configuration  
- ✅ Grouped and nested test suites  

---

## Contributing

I'm open to contributions from the community! You can:

- Fork the repository  
- Submit issues and feature requests  
- Open pull requests  

Let’s build better tools for developers—together.

---

## License

This project is licensed under the [MIT License](./LICENSE).

---

## 👨‍💻 Author

**Abiye Omiete**  
GitHub: [@Kr3artive](https://github.com/Kr3artive)  
Email: [abiyeomiete@gmail.com](mailto:abiyeomiete@gmail.com)  
NPM: [@kr3artive](https://www.npmjs.com/~kr3artive)
