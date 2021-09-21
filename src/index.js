import './style.css';

class TodoList {
  constructor() {
    this.ArrayOfTasks = [
      {
        index: 1,
        description: 'wash your dishes',
        completed: false,
      },
      {
        index: 2,
        description: 'complete To Do list project',
        completed: false,
      },
    ];
  }

  loadTasks() {
    const divHolder = document.getElementById('list-holder');

    this.ArrayOfTasks.forEach((item) => {
      const ul = document.createElement('ul');
      ul.className = 'todo-list-ul';
      ul.id = 'list-ul';

      const li = document.createElement('li');
      li.className = 'todo-list-ul-li';

      const styleDiv = document.createElement('div');

      const checkInput = document.createElement('input');
      checkInput.type = 'checkbox';
      checkInput.checked = item.completed;
      checkInput.className = 'todo-list-ul-li-box';

      const textInput = document.createElement('input');
      textInput.type = 'text';
      textInput.value = item.description;
      textInput.readOnly = true;
      textInput.className = 'todo-list-ul-li-input';

      styleDiv.appendChild(checkInput);
      styleDiv.appendChild(textInput);

      const img = document.createElement('img');
      img.src = '../images/menu.png';
      img.alt = 'ellipsis';
      img.className = 'menu-icon-img';

      li.appendChild(styleDiv);
      li.appendChild(img);

      ul.appendChild(li);

      divHolder.appendChild(ul);
    });
  }
}

const App = new TodoList();
App.loadTasks();