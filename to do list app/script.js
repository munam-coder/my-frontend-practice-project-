// DOM Elements
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");

// Retrieve todos from localStorage
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Save todos to localStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Render all todos
function renderTodos() {
  todoList.innerHTML = ""; // Clear previous

  todos.forEach((todo, index) => {
    const item = document.createElement("div");
    item.className = "todo-item";

    // Checkbox
    const circle = document.createElement("div");
    circle.className = "circle";
    if (todo.completed) circle.classList.add("checked");

    circle.addEventListener("click", () => {
      todos[index].completed = !todos[index].completed;
      saveTodos();
      renderTodos();
    });

    // Text
    const text = document.createElement("div");
    text.className = "todo-text";
    text.textContent = todo.text;
    if (todo.completed) text.classList.add("completed");

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.innerHTML = "&times;";
    delBtn.addEventListener("click", () => {
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    });

    // Append
    item.appendChild(circle);
    item.appendChild(text);
    item.appendChild(delBtn);
    todoList.appendChild(item);
  });

  updateItemsLeft();
}

// Add new todo
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && todoInput.value.trim() !== "") {
    todos.push({ text: todoInput.value.trim(), completed: false });
    todoInput.value = "";
    saveTodos();
    renderTodos();
  }
});

// Update items left
function updateItemsLeft() {
  const activeTodos = todos.filter(todo => !todo.completed).length;
  itemsLeft.textContent = activeTodos;
}

// Initial render
renderTodos();
