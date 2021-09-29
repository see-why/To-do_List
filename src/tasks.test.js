import { addTask } from './tasks';

describe('add new tasks', () => {
  test('add task', () => {
    const task = {
      index: 0,
      description: 'wash your hands',
      completed: false,
    };

    const arrayOfTasks = addTask([], task);

    expect(arrayOfTasks).toHaveLength(1);
  });

  test('add two tasks', () => {
    const task1 = {
      index: 0,
      description: 'wash your hands',
      completed: false,
    };

    const task2 = {
      index: 0,
      description: 'dance',
      completed: false,
    };

    let arrayOfTasks = addTask([], task1);
    arrayOfTasks = addTask(arrayOfTasks, task2);

    expect(arrayOfTasks).toHaveLength(2);
  });
});