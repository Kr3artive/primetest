#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const runTests = require('../src/tester');

const configPath = process.argv[2];

if (!configPath) {
  console.error('Please provide a config file path');
  process.exit(1);
}

const fullPath = path.resolve(process.cwd(), configPath);

if (!fs.existsSync(fullPath)) {
  console.error(`File not found: ${fullPath}`);
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
console.log('🔍 Running API Endpoint Tests...\n');
runTests(config);
console.log('All tests completed.');