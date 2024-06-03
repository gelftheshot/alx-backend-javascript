process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const readed = process.stdin.read();
  if (readed !== null) {
    process.stdout.write(`Your name is: ${readed}`);
    process.stdout.write('This important software is now closing\n');
    process.exit();
  }
});
