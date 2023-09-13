const request = require('request');

// Check if the user provided an episode number as an argument
if (process.argv.length < 3) {
  console.error('Usage: node starwars_title.js <episode_number>');
  process.exit(1);
}

// Get the episode number from the command line argument
const episodeNumber = parseInt(process.argv[2]);

// Create the URL for the Star Wars API endpoint
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${episodeNumber}`;

// Make an HTTP GET request to the API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('HTTP Status Code:', response.statusCode);
  } else {
    try {
      // Parse the JSON response
      const movieData = JSON.parse(body);

      // Extract and print the movie title
      console.log(movieData.title);
    } catch (parseError) {
      console.error('Error parsing JSON response:', parseError);
    }
  }
});
