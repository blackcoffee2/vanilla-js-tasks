const tasksDiv = document.getElementById("tasks-div");
const textInput = document.getElementById("text-input");
const addButton = document.getElementById("add-button");

addTask = function () {
  const task = textInput.value;
  if (task) {
    const p = document.createElement("p");
    p.innerText = task;
    tasksDiv.appendChild(p);
    textInput.value = "";
  }
};

addButton.onclick = function () {
  addTask();
};
