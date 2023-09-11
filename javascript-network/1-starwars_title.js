const request = require('request');

//  retrieving title of a Star Wars movie by movie ID

function getMovieTitle(movieID) {
  const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

  request(apiUrl, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const movieData = JSON.parse(body);
      const movieTitle = movieData.title;
      console.log(`Title of Episode ${movieID}: ${movieTitle}`);
    } else {
      console.error(`Error: Unable to fetch movie data for Episode ${movieID}`);
    }
  });
}

// Check ifmovie ID is provided as a command line argument

const args = process.argv.slice(2);

if (args.length !== 1) {
  console.error('Usage: node starwars_movie.js <movieID>');
} else {
  const movieID = parseInt(args[0]);

  if (!isNaN(movieID)) {
    getMovieTitle(movieID);
  } else {
    console.error('Error: Please provide a valid movie ID as an integer.');
  }
}
