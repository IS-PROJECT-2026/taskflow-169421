const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

const totalTasks = document.getElementById("total-tasks");
const pendingTasks = document.getElementById("pending-tasks");
const completedTasks = document.getElementById("completed-tasks");

let tasks = [];

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("task-title").value.trim();
    const description = document.getElementById("task-description").value.trim();

    if (title === "") {
        alert("Please enter a task title.");
        return;
    }

    const task = {
        id: Date.now(),
        title: title,
        description: description,
        completed: false
    };

    tasks.push(task);

    displayTasks();
    updateStatistics();

    taskForm.reset();
});


function displayTasks() {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        taskList.innerHTML = `
            <div class="empty-state">
                <p>No tasks yet. Create your first task!</p>
            </div>
        `;
        return;
    }

    tasks.forEach(function (task) {
        const taskElement = document.createElement("div");

        taskElement.className = "task-card";

        taskElement.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <span>${task.completed ? "Completed" : "Pending"}</span>
        `;

        taskList.appendChild(taskElement);
    });
}


function updateStatistics() {
    const completed = tasks.filter(task => task.completed).length;
    const pending = tasks.length - completed;

    totalTasks.textContent = tasks.length;
    pendingTasks.textContent = pending;
    completedTasks.textContent = completed;
}