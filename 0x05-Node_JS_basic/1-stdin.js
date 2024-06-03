const readline = require('readline');
const { spawn } = require('child_process');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question('Welcome to Holberton School, what is your name?', (input) => {
  const echo = spawn('echo', [input]);

  echo.stdout.on('data', (data) => {
    console.log(`Your name is: ${data.toString()}`);
  });

  echo.on('close', () => {
    if (!process.stdin.isTTY) {
      console.log('This important software is now closing');
    }
    process.exit();
  });
});
