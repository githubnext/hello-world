// Import a testing framework (e.g. Mocha, Jest, etc.)
const assert = require('assert');
const { execSync } = require('child_process');

// Write a test suite for app.ts
describe('app.ts', function() {
  // Write a test case that checks that app.ts prints "hello world" and "nice to meet you!!" to the console
  it('should print hello world and nice to meet you!!', function() {
    // Run app.ts and capture the output
    const output = execSync('node app.ts').toString();
    // Assert that the output matches the expected strings
    assert.match(output, /hello world\nnice to meet you!!\n/);
  });
});
