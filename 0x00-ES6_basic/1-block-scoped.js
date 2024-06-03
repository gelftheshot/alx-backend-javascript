export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* eslint-disable */
  if (trueOrFalse) {
    let task = true;
    let task2 = false;
  }
  /* eslint-enable */

  return [task, task2];
}
