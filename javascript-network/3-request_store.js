#!/usr/bin/env node

const fs = require('fs');
const request = require('request');
const { promisify } = require('util');
const writeFileAsync = promisify(fs.writeFile);

// Check if both URL and file path are provided as arguments
if (process.argv.length !== 4) {
  console.error('Usage: node fetchAndStore.js <URL> <file-path>');
  process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

// Perform the HTTP request to fetch the webpage contents
request(url, (error, response, body) => {
  if (error) {
    console.error('Error fetching the webpage:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('Failed to fetch webpage. Status code:', response.statusCode);
    process.exit(1);
  }

  // Write the fetched content to the specified file
  writeFileAsync(filePath, body, 'utf-8')
    .then(() => {
      console.log(`Successfully fetched and saved contents to ${filePath}`);
    })
    .catch((writeError) => {
      console.error('Error writing to file:', writeError);
      process.exit(1);
    });
});
