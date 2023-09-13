#!/usr/bin/env node

const request = require('request');

// Check if the user provided the API URL as an argument
if (process.argv.length < 3) {
  console.error('Usage: node starwars_count.js <api_url>');
  process.exit(1);
}

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

// Make an HTTP GET request to the API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('HTTP Status Code:', response.statusCode);
  } else {
    try {
      // Parse the JSON response
      const filmsData = JSON.parse(body);

      // Filter movies that include "Wedge Antilles" (character ID 18)
      const moviesWithWedgeAntilles = filmsData.results.filter((movie) =>
        movie.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')
      );

      // Print the count of movies with Wedge Antilles
      console.log(moviesWithWedgeAntilles.length);
    } catch (parseError) {
      console.error('Error parsing JSON response:', parseError);
    }
  }
});
