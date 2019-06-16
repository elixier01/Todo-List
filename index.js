var todo__input = document.getElementById("task");

function add__task__click() {
  var new__todo = document.createElement("li");
  new__todo.setAttribute("id", "created__todo");
  if (todo__input.value !== "") {
  new__todo.innerHTML = (todo__input.value);
  document.getElementById("todo").appendChild(new__todo);
  document.getElementById("task").value = ("");
  }
  todo__input.focus();
}

function add__task__key() {
  if (event.keyCode === 13) {
    var new__todo = document.createElement("li");
    new__todo.setAttribute("id", "created__todo");
    if (todo__input.value != "") {
      new__todo.innerHTML = (todo__input.value);
      document.getElementById("todo").appendChild(new__todo);
      document.getElementById("task").value = ("");
      }
    todo__input.focus();
  }
}

function remove__task() {
  var remove__todo = document.getElementById("created__todo");
  remove__todo.remove(this);created__todo
  todo__input.focus();
}