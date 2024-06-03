const taskFirst =  function() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

let taskNext = function () {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

export { taskFirst, taskNext };
