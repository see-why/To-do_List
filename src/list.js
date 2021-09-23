export function toggleCompleteTask(className) { /* eslint-disable-line no-unused-vars */
  if (className.style.textDecoration === 'line-through') {
    className.style.textDecoration = 'none';
  } else {
    className.style.textDecoration = 'line-through';
  }
}

export function strikeText(checked, className) {
  if (checked) {
    toggleCompleteTask(className);
  }
}