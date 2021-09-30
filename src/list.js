const toggleCompleteTask = (className) => {
  if (className.style.textDecoration === 'line-through') {
    className.style.textDecoration = 'none';
  } else {
    className.style.textDecoration = 'line-through';
  }
};

const strikeText = (checked, className) => {
  if (checked) {
    toggleCompleteTask(className);
  }
};

const updateStatus = (array, itemId, checked) => {
  const key = array.findIndex((x) => x.index === itemId);
  array[key].completed = checked;
  return array;
};

export {
  toggleCompleteTask, strikeText, updateStatus,
};