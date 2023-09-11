#!/usr/bin/env node

const request = require('request');

// API URL
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

    // Create a dictionary to store the number of completed tasks for each user
    const completedTasksByUser = {};

    // Iterate through the tasks and count completed tasks by user
    tasks.forEach((task) => {
      if (task.completed) {
        if (!completedTasksByUser[task.userId]) {
          completedTasksByUser[task.userId] = 1;
        } else {
          completedTasksByUser[task.userId]++;
        }
      }
    });

    // Print the number of completed tasks for each user
    for (const userId in completedTasksByUser) {
      console.log(`User ${userId} completed ${completedTasksByUser[userId]} tasks.`);
    }
  } catch (parseError) {
    console.error('Error parsing task data:', parseError);
    process.exit(1);
  }
});
