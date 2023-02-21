const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = [];

function renderTodos() {
    todoList.innerHTML = '';

    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];

        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = `<span>${todo}</span>
      <button type="button" data-id="${i}">&times;</button>`;

        const deleteBtn = li.querySelector('button');
        deleteBtn.addEventListener('click', handleDelete);

        todoList.appendChild(li);
    }
}

function handleAdd(event) {
    event.preventDefault();

    const todoText = todoInput.value.trim();
    if (!todoText) return;

    todos.push(todoText);
    renderTodos();
    todoInput.value = '';
}

function handleDelete(event) {
    const deleteBtn = event.target; 
    const id = deleteBtn.getAttribute('data-id');
    todos.splice(id, 1);
    renderTodos();
}

todoForm.addEventListener('submit', handleAdd);
