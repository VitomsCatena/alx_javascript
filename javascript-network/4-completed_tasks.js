#!/usr/bin/env node

const request = require('request');

const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Please provide the API URL as an argument.');
  process.exit(1);
}

const completedTasksByUser = {};

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('Request failed with status code:', response.statusCode);
    process.exit(1);
  }

  try {
    const todos = JSON.parse(body);

    for (const todo of todos) {
      if (todo.completed) {
        if (completedTasksByUser[todo.userId]) {
          completedTasksByUser[todo.userId]++;
        } else {
          completedTasksByUser[todo.userId] = 1;
        }
      }
    }

    console.log(completedTasksByUser);
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
    process.exit(1);
  }
});

    
