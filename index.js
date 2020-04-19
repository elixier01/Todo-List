var todo__input = document.getElementById("task");
document.getElementById("submit").addEventListener("click", addByClick);
document.getElementById("todo").addEventListener("click", removeTask);
document.addEventListener("keydown", event => {
  event.keyCode === 13 ? addByKey : null;
})

function addByClick() {
  var new__todo = document.createElement("li");
  new__todo.setAttribute("id", "created__todo");
  if (todo__input.value !== "") {
  new__todo.innerHTML = (todo__input.value);
  document.getElementById("todo").appendChild(new__todo);
  document.getElementById("task").value = ("");
  }
  todo__input.focus();
}

function addByKey() {
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

function removeTask() {
  event.target.remove();
  todo__input.focus();
}

document.addEventListener("keydown", addByKey);
