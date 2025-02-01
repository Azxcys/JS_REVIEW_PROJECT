// ==== TODO CRUD MANAGEMENT ==== //

// ARRAY TO STORE TODOS
let todos = [];

// DOM ELEMENTS
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// FUNCTION TO RENDER TODOS
function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
      <span>${todo}</span>
      <button onclick="editTodo(${index})">Edit</button>
      <button onclick="deleteTodo(${index})">Delete</button>
    `;
    todoList.appendChild(li);
    });
}

// FUNCTION TO ADD NEW TODO
function addTodo(event) {
    event.preventDefault(); // Prevent form submission
    const todo = todoInput.value;
    if (todo) {
        todos.push(todo);
        todoInput.value = ''; // Clear input field
        renderTodos();
    }
}

// FUNCTION TO EDIT A TODO
function editTodo (index) {
    const updateTodo = prompt('Edit your todo:', todos[index]);
    if (updateTodo !== null) {
        todos[index] = updateTodo.trim();
        renderTodos();
    }
}

// FUNCTION TO DELETE A TODO
function deleteTodo (index) {
    if (confirm('Are you sure you want to delete this todo?')){
        todos.splice(index, 1);
        renderTodos();
    }
}

// EVENT LISTENERS
todoForm.addEventListener('submit', addTodo);

// INITIAL RENDER
renderTodos();