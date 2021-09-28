import './style.css';
import { toggleCompleteTask, strikeText } from './list.js';
import {
  addTask, deleteTask, rearrangeIndexs, updateTask,
} from './tasks.js';

class TodoList {
  constructor() {
    this.ArrayOfTasks = [];
  }

  reloadPage() {
    window.onload = () => {
      this.loadTasks();
    };
    window.location.reload();
  }

  saveToLocalStorage() {
    localStorage.setItem('Tasks', JSON.stringify(this.ArrayOfTasks));
  }

  loadTasks() {
    const button = document.getElementById('clear-list-button');

    button.addEventListener('click', () => {
      const arrayOfLists = Array.from(document.getElementsByClassName('todo-list-ul'));

      arrayOfLists.forEach((item) => {
        const check = item.firstChild.firstChild.firstChild;
        const textInput = item.firstChild.firstChild.lastChild;

        if (check.checked) {
          const task = {
            index: textInput.id,
          };
          this.ArrayOfTasks = deleteTask(this.ArrayOfTasks, task);
        }
      });
      this.ArrayOfTasks = rearrangeIndexs(this.ArrayOfTasks);
      this.saveToLocalStorage();
      this.reloadPage();
    });

    const addInput = document.getElementById('add-new-task');

    addInput.addEventListener('change', () => {
      const task = {
        index: 1,
        description: addInput.value,
        completed: false,
      };

      this.ArrayOfTasks = addTask(this.ArrayOfTasks, task);
      addInput.value = '';
      this.saveToLocalStorage();
      this.reloadPage();
    });

    const divHolder = document.getElementById('list-holder');

    if (localStorage.getItem('Tasks') !== null) {
      this.ArrayOfTasks = JSON.parse(localStorage.getItem('Tasks'));
    }

    if (this.ArrayOfTasks !== null) {
      this.ArrayOfTasks.forEach((item) => {
        const ul = document.createElement('ul');
        ul.className = 'todo-list-ul';

        const li = document.createElement('li');
        li.className = 'todo-list-ul-li';

        const styleDiv = document.createElement('div');
        styleDiv.className = 'style-div';

        const checkInput = document.createElement('input');
        checkInput.type = 'checkbox';
        checkInput.checked = item.completed;
        checkInput.className = 'todo-list-ul-li-box';

        checkInput.addEventListener('change', (e) => {
          const textInput = e.target.parentNode.lastChild;
          toggleCompleteTask(textInput);
          item.completed = checkInput.checked;
          this.saveToLocalStorage();
        });

        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.value = item.description;
        textInput.readOnly = true;
        textInput.className = 'todo-list-ul-li-input';
        textInput.id = item.index;

        textInput.addEventListener('focus', (e) => {
          const check = e.target.parentNode.firstChild;

          if (check.checked !== true) {
            textInput.readOnly = false;
            const ul = e.target.parentNode.parentNode.parentNode;
            ul.style.background = '#ffffcc';
            textInput.style.background = '#ffffcc';
          }
        });

        textInput.addEventListener('blur', (e) => {
          const ul = e.target.parentNode.parentNode.parentNode;
          ul.style.background = '#fff';
          textInput.style.background = '#fff';
        });

        textInput.addEventListener('change', () => {
          const task = {
            index: textInput.id,
            description: textInput.value,
            completed: false,
          };

          this.ArrayOfTasks = updateTask(this.ArrayOfTasks, task);
          this.saveToLocalStorage();
          this.reloadPage();
        });

        strikeText(item.completed, textInput);

        styleDiv.append(checkInput, textInput);

        const img = document.createElement('img');
        img.src = '../images/menu.png';
        img.alt = 'ellipsis';
        img.className = 'menu-icon-img';

        img.addEventListener('click', (e) => {
          const textInput = e.target.parentNode.firstChild.lastChild;

          if (textInput.readOnly === false) {
            const task = {
              index: textInput.id,
            };

            this.ArrayOfTasks = deleteTask(this.ArrayOfTasks, task);
            this.ArrayOfTasks = rearrangeIndexs(this.ArrayOfTasks);
            this.saveToLocalStorage();
            this.reloadPage();
          }
        });

        li.append(styleDiv, img);

        ul.appendChild(li);

        divHolder.appendChild(ul);
      });
    }
  }
}

const App = new TodoList();
App.loadTasks();