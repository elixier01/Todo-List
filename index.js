function add__task() {
  var x = document.getElementById("task").value;
  var y = document.createElement("li");
  y.innerHTML = (x);
  document.getElementById("todo").appendChild(y);
  document.getElementById("task").value = (" ");
}