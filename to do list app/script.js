const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function savetodos() {
  localStorage.setItem("todos", JSON.stringify(todos))
}

function rendertodos() {
  todos.innerHTML = "";
}

todos.foreach((todo, index)=>{
  let item = document.createElement("div");
  item.className =  "todo-item";
})

let circle = document.createElement("div");
circle.className = "circle";
if(todo.completed) circle.classList.add("checked");


circle.addEventListener("click", ()=>{
  todos[index].completed = !todos[index].completed;
  savetodos()
  rendertodos()
});