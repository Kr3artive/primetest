const axios = require('axios');

async function runTests(config) {
  for (const test of config) {
    try {
      const response = await axios({
        method: test.method,
        url: test.url,
        data: test.body || {},
        headers: test.headers || {},
        validateStatus: () => true
      });

      const passed = response.status === test.expectedStatus;
      console.log(`${passed ? '✅' : '❌'} ${test.name} - ${response.status}`);

      if (!passed) {
        console.log(`↪ Expected: ${test.expectedStatus}, Got: ${response.status}`);
      }
    } catch (err) {
      console.error(`Error: ${test.name} - Error: ${err.message}`);
    }
  }
}

module.exports = runTests;
