const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");
const taskSearch = document.getElementById("task-search");
const taskFilter = document.getElementById("task-filter");

const taskPriority = document.getElementById("task-priority");
const taskDueDate = document.getElementById("task-due-date");

const formMessage = document.getElementById("form-message");

const totalTasks = document.getElementById("total-tasks");
const pendingTasks = document.getElementById("pending-tasks");
const completedTasks = document.getElementById("completed-tasks");

const highPriorityTasks = document.getElementById("high-priority-tasks");
const completionPercentage =
    document.getElementById("completion-percentage");
const completionProgress =
    document.getElementById("completion-progress");

let tasks = JSON.parse(localStorage.getItem("taskflow_tasks")) || [];

function saveTasks() {
    localStorage.setItem("taskflow_tasks", JSON.stringify(tasks));
}
function validateTaskForm(title, description, priority, dueDate) {
    const errors = [];

    if (title === "") {
        errors.push("Task title is required.");
    }

    if (title.length > 0 && title.length < 3) {
        errors.push("Task title must be at least 3 characters.");
    }

    if (title.length > 100) {
        errors.push("Task title cannot exceed 100 characters.");
    }

    if (description.length > 500) {
        errors.push("Description cannot exceed 500 characters.");
    }

    const validPriorities = ["low", "medium", "high"];

    if (!validPriorities.includes(priority)) {
        errors.push("Please select a valid priority.");
    }

    if (dueDate !== "") {
        const selectedDate = new Date(dueDate);
        const today = new Date();

        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            errors.push("Due date cannot be in the past.");
        }
    }

    return errors;
}

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("task-title").value.trim();
    const description = document.getElementById("task-description").value.trim();
    const priority = taskPriority.value;
    const dueDate = taskDueDate.value;

   const errors = validateTaskForm(
    title,
    description,
    priority,
    dueDate
);

if (errors.length > 0) {
    formMessage.className = "form-message error";
    formMessage.innerHTML = `
        <ul>
            ${errors.map(error => `<li>${error}</li>`).join("")}
        </ul>
    `;

    return;
}

    const task = {
        id: Date.now(),
        title: title,
        description: description,
        priority: priority,
        dueDate: dueDate,
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

    const searchTerm = taskSearch.value.toLowerCase().trim();
    const filter = taskFilter.value;

    let filteredTasks = tasks;

    // Filter by task status
    if (filter === "pending") {
        filteredTasks = filteredTasks.filter(function (task) {
            return !task.completed;
        });
    }

    if (filter === "completed") {
        filteredTasks = filteredTasks.filter(function (task) {
            return task.completed;
        });
    }

    // Filter by search term
    if (searchTerm !== "") {
        filteredTasks = filteredTasks.filter(function (task) {
            return (
                task.title.toLowerCase().includes(searchTerm) ||
                task.description.toLowerCase().includes(searchTerm)
            );
        });
    }

    if (filteredTasks.length === 0) {
        taskList.innerHTML = `
            <div class="empty-state">
                <p>No tasks found.</p>
            </div>
        `;
        return;
    }

    filteredTasks.forEach(function (task) {
        const taskElement = document.createElement("div");

        taskElement.className =
            `task-card ${task.completed ? "completed" : ""}`;

        taskElement.innerHTML = `
    <h3>${task.title}</h3>

    <p>${task.description}</p>

    <div class="task-details">
        <span class="task-priority priority-${task.priority || "medium"}">
            Priority: ${task.priority || "medium"}
        </span>

        <span class="task-due-date">
            Due: ${task.dueDate || "No due date"}
        </span>
    </div>
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
                    ${task.completed
                        ? "Mark as Pending"
                        : "Mark as Complete"}
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
    const updatedPriority = prompt(
    "Enter priority (low, medium, high):",
    task.priority || "medium"
);

if (updatedPriority === null) {
    return;
}

const updatedDueDate = prompt(
    "Enter due date (YYYY-MM-DD), or leave blank:",
    task.dueDate || ""
);

if (updatedDueDate === null) {
    return;
}

    if (updatedDescription === null) {
        return;
    }

    if (updatedTitle.trim() === "") {
        alert("Task title cannot be empty.");
        return;
    }

    task.title = updatedTitle.trim();
    task.description = updatedDescription.trim();
    task.priority = updatedPriority.trim().toLowerCase() || "medium";
task.dueDate = updatedDueDate.trim();

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
    const total = tasks.length;

    const completed = tasks.filter(function (task) {
        return task.completed;
    }).length;

    const pending = total - completed;

    const highPriority = tasks.filter(function (task) {
        return task.priority === "high";
    }).length;

    const percentage = total === 0
        ? 0
        : Math.round((completed / total) * 100);

    totalTasks.textContent = total;
    pendingTasks.textContent = pending;
    completedTasks.textContent = completed;
    highPriorityTasks.textContent = highPriority;

    completionPercentage.textContent = `${percentage}%`;
    completionProgress.style.width = `${percentage}%`;
}

taskSearch.addEventListener("input", function () {
    displayTasks();
});

taskFilter.addEventListener("change", function () {
    displayTasks();
});

displayTasks();
updateStatistics();