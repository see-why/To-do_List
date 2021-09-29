const addTask = (array, task) => {
  const size = array.length;
  task.index = (size + 1).toString();

  array.push(task);

  return array;
};

const deleteTask = (array, task) => {
  array = array.filter((item) => item.index !== task.index);
  return array;
};

const rearrangeIndexs = (array) => {
  array.forEach((item, index) => {
    item.index = (index + 1).toString();
  });

  return array;
};

const updateTask = (array, task) => {
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

export {
  addTask, deleteTask, rearrangeIndexs, updateTask,
};