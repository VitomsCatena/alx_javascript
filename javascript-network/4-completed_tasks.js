#!/usr/bin/env node

const request = require('request');

// Define the API URL
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Perform the HTTP request to fetch the task data
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error fetching task data:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('Failed to fetch task data. Status code:', response.statusCode);
    process.exit(1);
  }

  try {
    const tasks = JSON.parse(body);

    // Create a Set to store unique user IDs with completed tasks
    const usersWithCompletedTasks = new Set();

    // Iterate through the tasks and add user IDs with completed tasks to the Set
    tasks.forEach((task) => {
      if (task.completed) {
        usersWithCompletedTasks.add(task.userId);
      }
    });

    // Calculate the number of users with completed tasks
    const numberOfUsersWithCompletedTasks = usersWithCompletedTasks.size;

    console.log(`Number of users with completed tasks: ${numberOfUsersWithCompletedTasks}`);
  } catch (parseError) {
    console.error('Error parsing task data:', parseError);
    process.exit(1);
  }
});
