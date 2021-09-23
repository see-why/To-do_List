export const toggleCompleteTask = (className) => {
  if (className.style.textDecoration === 'line-through') {
    className.style.textDecoration = 'none';
  } else {
    className.style.textDecoration = 'line-through';
  }
};

export const strikeText = (checked, className) => {
  if (checked) {
    toggleCompleteTask(className);
  }
};