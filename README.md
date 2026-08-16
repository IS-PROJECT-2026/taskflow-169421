# TaskFlow

TaskFlow is a functional web-based task management system designed to help users organize, manage, and track their daily tasks.

The application provides a simple and responsive interface for creating, editing, completing, searching, filtering, and deleting tasks. It also provides task priorities, due dates, statistics, completion progress, form validation, and accessibility support.

---

## Live Demo

**Live GitHub Pages URL:** https://is-project-2026.github.io/taskflow-169421/

**Deployment:** Successfully deployed using GitHub Pages from the main branch.
**Status:** TaskFlow is currently live and publicly accessible through GitHub Pages.

## Features

TaskFlow currently supports the following features:

- Create new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Mark completed tasks as pending
- Search tasks
- Filter tasks by status
- Assign task priorities
- Set task due dates
- View total task statistics
- View pending task statistics
- View completed task statistics
- View high-priority task statistics
- Track task completion percentage
- Display a visual task progress bar
- Validate task form input
- Display user-friendly validation errors
- Display successful task creation feedback
- Persist tasks using browser LocalStorage
- Responsive layout for desktop, tablet, and mobile devices
- Keyboard accessibility support
- Accessible form and search controls

---

## Technologies Used

The project is implemented as a static web application using:

- **HTML5** — Page structure and semantic elements
- **CSS3** — Styling, responsive layouts, and accessibility improvements
- **JavaScript** — Application logic and task management functionality
- **LocalStorage** — Persistent storage of tasks in the user's browser
- **Git** — Version control
- **GitHub** — Repository hosting and project management
- **GitHub Pages** — Static web deployment

---

## How TaskFlow Works

TaskFlow allows a user to create and manage tasks directly through the web interface.

When a task is created, its information is stored in the browser's LocalStorage. This allows the tasks to remain available when the page is refreshed.

The application calculates task statistics dynamically based on the current tasks.

For example:

- **Total** represents all tasks.
- **Pending** represents tasks that have not been completed.
- **Completed** represents finished tasks.
- **High Priority** represents tasks assigned a high priority.
- **Completion Percentage** represents the percentage of tasks that have been completed.

---

## Main Functionality

### Task Creation

Users can create a task by entering:

- Task title
- Description
- Priority
- Due date

The application validates the information before creating the task.

### Task Editing

Users can edit an existing task's information.

### Task Completion

Tasks can be marked as completed or returned to pending status.

### Task Deletion

Users can permanently remove tasks after confirming the deletion.

### Task Search

Users can search for tasks using keywords from the task information.

### Task Filtering

Users can filter tasks according to their status:

- All Tasks
- Pending
- Completed

### Task Priority

Tasks can be assigned different priority levels to help users identify important work.

### Due Dates

Users can assign due dates to tasks. The application prevents invalid past due dates when creating tasks.

---

## Statistics Dashboard

TaskFlow includes a statistics dashboard that provides an overview of the user's tasks.

The dashboard displays:

- Total Tasks
- Pending Tasks
- Completed Tasks
- High Priority Tasks

The application also calculates the percentage of completed tasks and displays it using a visual progress bar.

The statistics automatically update when tasks are:

- Created
- Completed
- Returned to pending
- Deleted
- Updated

---

## Form Validation and Error Handling

TaskFlow validates user input before creating a task.

Validation includes:

- Task title is required
- Task title must contain at least 3 characters
- Task title cannot exceed 100 characters
- Description cannot exceed 500 characters
- Priority must contain a valid value
- Due dates cannot be in the past

Validation messages are displayed directly within the application rather than relying only on browser alert dialogs.

Successful task creation also provides user feedback.

---

## Data Persistence

TaskFlow uses the browser's LocalStorage API to persist task information.

The basic data flow is:

```text
User
  |
  v
TaskFlow Interface
  |
  v
JavaScript
  |
  v
LocalStorage
  |
  v
Saved Tasks
