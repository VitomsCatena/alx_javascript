#!/usr/bin/env node

const request = require('request');

// API routes

const routes = [
  'http://localhost:5050/route_0',
  'http://localhost:5050/route_1',
  'http://localhost:5050/route_2',
  'http://localhost:5050/route_3',
  'http://localhost:5050/route_4',
];

// Function to fetch data from a route and count users with completed tasks

function countUsersWithCompletedTasks(route) {
  request(route, (error, response, body) => {
    if (error) {
      console.error(`Error fetching data from ${route}:`, error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error(`Failed to fetch data from ${route}. Status code:`, response.statusCode);
      return;
    }

    try {
      const data = JSON.parse(body);

      // Initializing the count of users with completed tasks to 0
      
      let count = 0;

      // Iterating through the data and count users with completed tasks
      
      data.forEach((item) => {
        if (item.completed) {
          count++;
        }
      });

      console.log(`Correct output - ${count} users - ${route}`);
    } catch (parseError) {
      console.error(`Error parsing data from ${route}:`, parseError);
    }
  });
}

// Looping through the routes and counting users with completed tasks for each route


routes.forEach((route) => {
  countUsersWithCompletedTasks(route);
});
