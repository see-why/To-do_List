import { addTask, deleteTask } from './tasks.js';

const task1 = {
  index: 0,
  description: 'wash your hands',
  completed: false,
};

const task2 = {
  index: 1,
  description: 'dance',
  completed: false,
};

const task3 = {
  index: 2,
  description: 'gardening',
  completed: false,
};

const task4 = {
  index: 3,
  description: 'buy flowers',
  completed: false,
};

const taskList = [task1, task2, task3, task4];

describe('add new tasks', () => {
  test('add task', () => {
    const arrayOfTasks = addTask([], task1);

    expect(arrayOfTasks).toHaveLength(1);
  });

  test('add two tasks', () => {
    let arrayOfTasks = addTask([], task1);
    arrayOfTasks = addTask(arrayOfTasks, task2);

    expect(arrayOfTasks).toHaveLength(2);
  });
});

describe('delete tasks', () => {
  test('delete task', () => {
    const currentList = deleteTask(taskList, task4);

    expect(currentList).toStrictEqual([task1, task2, task3]);
  });

  test('delete two tasks', () => {
    let currentList = deleteTask(taskList, task4);
    currentList = deleteTask(currentList, task3);

    expect(currentList).toStrictEqual([task1, task2]);
  });
});
