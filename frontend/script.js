const taskInput = document.getElementById("taskInput");
const priorityInput = document.getElementById("priorityInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

let tasks = [];

addTaskButton.addEventListener("click", addTask);

function addTask() {
    const title = taskInput.value.trim();
    const priority = priorityInput.value;

    if (title === "") {
        alert("Please enter a task.");
        return;
    }

    const task = {
        id: Date.now(),
        title: title,
        priority: priority,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";

    displayTasks();
}

function displayTasks() {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        taskList.appendChild(emptyMessage);
        return;
    }

    tasks.forEach(task => {
        const taskCard = document.createElement("div");
        taskCard.className = "task-card";

        taskCard.innerHTML = `
            <div class="task-info">
                <h3>${task.title}</h3>
                <span class="priority">
                    ${task.priority.toUpperCase()} PRIORITY
                </span>
            </div>
        `;

        taskList.appendChild(taskCard);
    });
}