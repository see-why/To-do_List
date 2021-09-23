export const addTask = (array, task) => {
  const size = array.length;
  task.index = (size + 1).toString();

  array.push(task);

  return array;
};

export const deleteTask = (array, task) => {
  array = array.filter((item) => item.index !== task.index);
  return array;
};

export const rearrangeIndexs = (array) => {
  array.forEach((item, index) => {
    item.index = (index + 1).toString();
  });

  return array;
};

export const updateTask = (array, task) => {
  if (task.description === '') {
    deleteTask(array, task);
  } else {
    array.forEach((item, index) => {
      if ((index + 1).toString() === task.index) {
        item.description = task.description;
      }
    });
  }

  return array;
};