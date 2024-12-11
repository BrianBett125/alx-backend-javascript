
### Files

- **0-calcul.js**: A basic function that rounds two numbers and returns their sum.
- **0-calcul.test.js**: Unit tests for `0-calcul.js` using Mocha and the Node.js assert library.
- **1-calcul.js**: Extended version of `0-calcul.js` to include SUM, SUBTRACT, and DIVIDE operations.
- **1-calcul.test.js**: Unit tests for `1-calcul.js` using Mocha and the Node.js assert library.
- **2-calcul_chai.js**: Similar to `1-calcul.js` but tested with the Chai assertion library.
- **2-calcul_chai.test.js**: Unit tests for `2-calcul_chai.js` using Mocha and Chai.
- **3-payment.js**: A function that utilizes a utility method for calculation and logs the result.
- **3-payment.test.js**: Tests for `3-payment.js` using Sinon spies to monitor method calls.
- **4-payment.js**: Similar to `3-payment.js` but demonstrates the use of stubs for testing.
- **4-payment.test.js**: Tests for `4-payment.js` using Sinon stubs to replace method behavior.
- **5-payment.js**: Similar to `4-payment.js` with additional hooks for testing.
- **5-payment.test.js**: Tests for `5-payment.js` using Sinon spies and hooks.
- **6-payment_token.js**: A function that returns a promise based on success or failure.
- **6-payment_token.test.js**: Async tests for `6-payment_token.js` using Mocha's `done` callback.
- **7-skip.test.js**: Demonstrates how to skip failing tests without removing them.
- **8-api/**: Contains files for API testing with Express.
  - **package.json**: Project dependencies for the API.
  - **api.js**: Express server with routes.
  - **api.test.js**: Integration tests for the API.
- **9-api/**: Adds regex validation for routes.
  - **api.js**: Updated Express server with regex validation.
  - **api.test.js**: Tests for the new route with regex validation.
- **10-api/**: Further API testing with additional endpoints.
  - **api.js**: Express server with new endpoints.
  - **api.test.js**: Tests for the new endpoints including deep equality checks.

## Prerequisites

- Node.js (v12 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:
   
   ```bash
   git clone https://github.com/yourusername/nodejs-testing-project.git
   cd nodejs-testing-project

3. Install dependencies:
   
   ```bash
   npm install

5. Running Tests:
   
   To run all the tests, use the following command:
   ```bash
   npm test
