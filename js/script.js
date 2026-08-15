const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

const totalTasks = document.getElementById("total-tasks");
const pendingTasks = document.getElementById("pending-tasks");
const completedTasks = document.getElementById("completed-tasks");

let tasks = JSON.parse(localStorage.getItem("taskflow_tasks")) || [];

function saveTasks() {
    localStorage.setItem("taskflow_tasks", JSON.stringify(tasks));
}

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

    saveTasks();
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

        taskElement.className = `task-card ${task.completed ? "completed" : ""}`;

        taskElement.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>

            <span class="task-status">
                ${task.completed ? "Completed" : "Pending"}
            </span>

            <div class="task-actions">
    <button
        class="edit-btn"
        onclick="editTask(${task.id})"
    >
        Edit
    </button>

    <button
        class="complete-btn"
        onclick="toggleTask(${task.id})"
    >
        ${task.completed ? "Mark as Pending" : "Mark as Complete"}
    </button>

    <button
        class="delete-btn"
        onclick="deleteTask(${task.id})"
    >
        Delete
    </button>
</div>
        `;

        taskList.appendChild(taskElement);
    });
}

function toggleTask(taskId) {
    tasks = tasks.map(function (task) {
        if (task.id === taskId) {
            return {
                ...task,
                completed: !task.completed
            };
        }

        return task;
    });

    saveTasks();
    displayTasks();
    updateStatistics();
}

function editTask(taskId) {
    const task = tasks.find(function (task) {
        return task.id === taskId;
    });

    if (!task) {
        return;
    }

    const updatedTitle = prompt("Enter the new task title:", task.title);

    if (updatedTitle === null) {
        return;
    }

    const updatedDescription = prompt(
        "Enter the new task description:",
        task.description
    );

    if (updatedDescription === null) {
        return;
    }

    if (updatedTitle.trim() === "") {
        alert("Task title cannot be empty.");
        return;
    }

    task.title = updatedTitle.trim();
    task.description = updatedDescription.trim();

    saveTasks();
    displayTasks();
    updateStatistics();
}

function deleteTask(taskId) {
    const task = tasks.find(function (task) {
        return task.id === taskId;
    });

    if (!task) {
        return;
    }

    const confirmed = confirm(
        `Are you sure you want to delete "${task.title}"?`
    );

    if (!confirmed) {
        return;
    }

    tasks = tasks.filter(function (task) {
        return task.id !== taskId;
    });

    saveTasks();
    displayTasks();
    updateStatistics();
}

function updateStatistics() {
    const completed = tasks.filter(task => task.completed).length;
    const pending = tasks.length - completed;

    totalTasks.textContent = tasks.length;
    pendingTasks.textContent = pending;
    completedTasks.textContent = completed;
}
displayTasks();
updateStatistics();