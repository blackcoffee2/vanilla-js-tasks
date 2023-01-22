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

    const div = document.createElement("div");
    div.classList = "task-container";

    const p = document.createElement("p");
    p.innerText = task;
    div.appendChild(p);

    const img = document.createElement("img");
    img.src = "./static/images/bin-minus.svg";
    img.classList = "task-img-delete";
    div.appendChild(img);

    tasksDiv.appendChild(div);
  }
};

addButton.onclick = function () {
  addTask();
};

textInput.onkeydown = (e) => {
  if (e.key === "Enter") {
    addTask();
  }
};
