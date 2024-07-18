document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false));
  }

  function addTask(taskText, save = true) {
    // Task creation logic remains the
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task");
    }

    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(tasskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    const li = document.createElement("li");
    const removeButton = document.createElement("button");
    li.textContent = taskText;
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };
    li.appendChild(removeButton);
    taskList.appendChild(li);
    taskInput.value = "";
  }

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }

    loadTasks();
  });
});
