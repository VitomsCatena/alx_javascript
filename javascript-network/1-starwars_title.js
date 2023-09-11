#!/usr/bin/env node
"use strict";

const request = require("request");

if (process.argv.length !== 3) {
  console.error("Usage: node script.js <movie ID>");
  process.exit(1);
}

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

  if (response && response.statusCode === 200) {
    try {
      const movieData = JSON.parse(body);
      console.log(`Title: ${movieData.title}`);
    } catch (parseError) {
      console.error("Error parsing API response.");
      process.exit(1);
    }
  } else {
    console.error(`Unable to retrieve movie information for ID ${movieId}`);
    process.exit(1);
  }
});
