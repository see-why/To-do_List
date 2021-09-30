import {
  addTask,
  deleteTask,
  updateTask,
  deleteCompleted,
} from './tasks';
import {
  updateStatus,
} from './list';

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

    expect(currentList).toHaveLength(3);
  });
});

describe('update tasks', () => {
  const newtask4 = {
    index: 3,
    description: 'buy guns',
    completed: false,
  };

  const newtask3 = {
    index: 2,
    description: 'singing',
    completed: false,
  };

  test('update task', () => {
    const List = updateTask(taskList, newtask4);

    expect(List[3].description).toBe(newtask4.description);
  });

  test('update two tasks', () => {
    let List = updateTask(taskList, newtask4);
    List = updateTask(List, newtask3);

    expect(List[3].description).toBe(newtask4.description);
    expect(List[2].description).toBe(newtask3.description);
  });
});

describe('update task complete status', () => {
  test('update status to true', () => {
    const newList = updateStatus(taskList, 2, true);
    expect(newList[1].completed).toBe(true);
  });

  test('update status to false', () => {
    const newList = updateStatus(taskList, 2, false);
    expect(newList[1].completed).toBe(false);
  });
});

describe('Clear all completed', () => {
  const List = [
    {
      index: 1,
      description: 'One',
      completed: false,
    }, {
      index: 2,
      description: 'Two',
      completed: false,
    }, {
      index: 3,
      description: 'Three',
      completed: false,
    }, {
      index: 4,
      description: 'Four',
      completed: false,
    },
  ];
  test('Delete two tasks that are completed', () => {
    let newList = updateStatus(List, 2, true);
    newList = updateStatus(newList, 3, true);
    newList = deleteCompleted(newList);
    expect(newList).toHaveLength(2);
  });
  test('Delete three tasks that are completed', () => {
    let newList = updateStatus(List, 2, true);
    newList = updateStatus(newList, 3, true);
    newList = updateStatus(newList, 4, true);
    newList = deleteCompleted(newList);
    expect(newList).toHaveLength(1);
  });
});
