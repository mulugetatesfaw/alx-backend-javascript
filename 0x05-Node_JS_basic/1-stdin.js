#!/usr/bin/node

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?');

rl.on('line', (name) => {
  console.log(`Your name is: ${name}`);
});

rl.on('close', () => {
  console.log('\nThis important software is now closing');
});