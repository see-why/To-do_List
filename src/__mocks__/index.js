import localStorageMock from './localStorage';

export default class TodoList {
  constructor() {
    this.ArrayOfTasks = [];
  }

  addInputTagEvent = () => {
    const addInput = document.getElementById('add-new-task');

    const task = {
      index: this.ArrayOfTasks.length + 1,
      description: `${addInput.value}`,
      completed: false,
    };

    this.ArrayOfTasks.push(task);
    addInput.value = '';
    localStorageMock.setItem('tasks', this.ArrayOfTasks);
  }
}