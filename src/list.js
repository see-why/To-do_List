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
  array.forEach((item) => {
    if (item.index === itemId) {
      item.completed = checked;
    }
  });
  return array;
};

export {
  toggleCompleteTask, strikeText, updateStatus,
};