#!/usr/bin/env node

"use strict";

const request = require("request");

if (process.argv.length !== 3) {
  console.error("Usage: node script.js <API URL>");
  process.exit(1);
}

const apiUrl = process.argv[2];

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

  if (response && response.statusCode === 200) {
    try {
      const filmData = JSON.parse(body);
      const wedgeAntillesMovies = filmData.results.filter((film) => {
        return film.characters.includes("https://swapi-api.alx-tools.com/api/people/18/");
      });

      console.log(`Number of movies with Wedge Antilles: ${wedgeAntillesMovies.length}`);
    } catch (parseError) {
      console.error("Error parsing API response.");
      process.exit(1);
    }
  } else {
    console.error("Unable to retrieve movie information.");
    process.exit(1);
  }
});
