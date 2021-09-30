import TodoList from '../__mocks__/index';
import localStorageMock from '../__mocks__/localStorage';

describe('Add to-do', () => {
  test('Local storage should be updated after adding new item', () => {
    document.body.innerHTML = '<input id="add-new-task" value="dance for me">';
    const newTodoList = new TodoList();
    newTodoList.addInputTagEvent();

    expect(localStorageMock.getItem('tasks')).toHaveLength(1);
  });
});