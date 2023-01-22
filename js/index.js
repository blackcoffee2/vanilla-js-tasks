const tasksDiv = document.getElementById("tasks-div");
const textInput = document.getElementById("text-input");
const addButton = document.getElementById("add-button");

// State
const tasks = [];

// Update State
function addTask() {
  const task = textInput.value;
  if (task) {
    tasks.push(task);
    textInput.value = "";
    uiFromState();
  }
}

function deleteTask(task) {
  const _tasks = structuredClone(tasks);
  tasks.length = 0;
  for (let i = 0; i < _tasks.length; i++) {
    const _task = _tasks[i];
    if (_task != task) {
      tasks.push(_task);
    }
  }
  uiFromState();
}

// Build UI from state
function uiFromState() {
  tasksDiv.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];

    const div = document.createElement("div");
    div.classList = "task-container";
    div.state = task;

    const p = document.createElement("p");
    p.innerText = task;
    div.appendChild(p);

    const img = document.createElement("img");
    img.src = "./static/images/bin-minus.svg";
    img.classList = "task-img-delete";
    img.onclick = () => deleteTask(img.parentElement.state);
    div.appendChild(img);

    tasksDiv.appendChild(div);
  }
  tasksDiv.scrollIntoView(false);
}

addButton.onclick = function () {
  addTask();
};

textInput.onkeydown = function (e) {
  if (e.key === "Enter") {
    addTask();
  }
};
