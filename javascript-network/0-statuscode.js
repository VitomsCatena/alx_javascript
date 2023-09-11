#!/usr/bin/env node

"use strict";

const request = require("request");

if (process.argv.length !== 3) {
  console.error("Usage: node script.js <URL>");
  process.exit(1);
}

const url = process.argv[2];

request.get(url, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

  if (response && response.statusCode) {
    console.log(`code: ${response.statusCode}`);
  } else {
    console.error("Unable to retrieve the status code.");
    process.exit(1);
  }
});
