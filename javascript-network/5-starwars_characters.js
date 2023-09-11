#!/usr/bin/env node

const request = require('request');

// Check if the Movie ID is provided as an argument
if (process.argv.length !== 3) {
  console.error('Usage: node starWarsCharacters.js <Movie-ID>');
  process.exit(1);
}

const movieId = process.argv[2];

// Define the URL to fetch movie details
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

// Perform the HTTP request to fetch movie details
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error fetching movie data:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('Failed to fetch movie data. Status code:', response.statusCode);
    process.exit(1);
  }

  try {
    const movieData = JSON.parse(body);

    console.log(`Characters in "${movieData.title}":`);

    // Iterate through the character URLs and fetch character details
    movieData.characters.forEach((characterUrl) => {
      request(characterUrl, (charError, charResponse, charBody) => {
        if (charError) {
          console.error('Error fetching character data:', charError);
          return;
        }

        if (charResponse.statusCode !== 200) {
          console.error('Failed to fetch character data. Status code:', charResponse.statusCode);
          return;
        }

        const characterData = JSON.parse(charBody);
        console.log(characterData.name);
      });
    });
  } catch (parseError) {
    console.error('Error parsing movie data:', parseError);
    process.exit(1);
  }
});
