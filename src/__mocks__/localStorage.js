const taskStorage = [];

const localStorageMock = {
  getItem: (key) => taskStorage[key],
  setItem: (key, taskArray) => {
    taskStorage[key] = taskArray;
  },
};

export default localStorageMock;