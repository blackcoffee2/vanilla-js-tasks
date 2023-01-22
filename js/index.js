const tasksDiv = document.getElementById("tasks-div");
const textInput = document.getElementById("text-input");
const addButton = document.getElementById("add-button");

// State
const tasks = [];

// Update State
addTask = function () {
  const task = textInput.value;
  if (task) {
    tasks.push(task);
    textInput.value = "";
    uiFromState();
  }
};

// Build UI from state
uiFromState = function () {
  tasksDiv.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const p = document.createElement("p");
    p.innerText = task;
    tasksDiv.appendChild(p);
  }
};

addButton.onclick = function () {
  addTask();
};
