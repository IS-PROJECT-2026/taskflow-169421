# TaskFlow

TaskFlow is a functional web-based task management system designed to help users organize, manage, and track their daily tasks.

The application provides a simple and responsive interface for creating, editing, completing, searching, filtering, and deleting tasks. It also provides task priorities, due dates, statistics, completion progress, form validation, error handling, and accessibility support.

---

## Live Demo

**Live GitHub Pages URL:** https://is-project-2026.github.io/taskflow-169421/

---

## Features

TaskFlow currently supports the following features:

* Create new tasks
* Edit existing tasks
* Delete tasks
* Mark tasks as completed
* Mark completed tasks as pending
* Search tasks
* Filter tasks by status
* Assign task priorities
* Set task due dates
* View total task statistics
* View pending task statistics
* View completed task statistics
* View high-priority task statistics
* Track task completion percentage
* Display a visual task progress bar
* Validate task form input
* Display user-friendly validation errors
* Display successful task creation feedback
* Persist tasks using browser LocalStorage
* Responsive layout for desktop, tablet, and mobile devices
* Keyboard accessibility support
* Visible keyboard focus indicators
* Accessible form and search controls

---

## Technologies Used

The project is implemented as a static web application using:

* **HTML5** — Page structure and semantic elements
* **CSS3** — Styling, responsive layouts, and accessibility improvements
* **JavaScript** — Application logic and task management functionality
* **LocalStorage API** — Persistent storage of tasks in the user's browser
* **Git** — Version control
* **GitHub** — Repository hosting and project management
* **GitHub Pages** — Static web deployment

---

## How TaskFlow Works

TaskFlow allows a user to create and manage tasks directly through the web interface.

When a task is created, its information is stored in the browser's LocalStorage. This allows the tasks to remain available when the page is refreshed.

The application calculates task statistics dynamically based on the current tasks.

For example:

* **Total** represents all tasks.
* **Pending** represents tasks that have not been completed.
* **Completed** represents finished tasks.
* **High Priority** represents tasks assigned a high priority.
* **Completion Percentage** represents the percentage of tasks that have been completed.

---

## Main Functionality

### Task Creation

Users can create a task by entering:

* Task title
* Description
* Priority
* Due date

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

* All Tasks
* Pending
* Completed

### Task Priority

Tasks can be assigned different priority levels to help users identify important work.

### Due Dates

Users can assign due dates to tasks. The application prevents invalid past due dates when creating tasks.

---

## Statistics Dashboard

TaskFlow includes a statistics dashboard that provides an overview of the user's tasks.

The dashboard displays:

* Total Tasks
* Pending Tasks
* Completed Tasks
* High Priority Tasks

The application also calculates the percentage of completed tasks and displays it using a visual progress bar.

The statistics automatically update when tasks are:

* Created
* Completed
* Returned to pending
* Deleted
* Updated

---

## Completion Progress

TaskFlow provides a visual representation of task completion.

The completion percentage is calculated based on the number of completed tasks compared with the total number of tasks.

```text
Completion Percentage =
(Completed Tasks / Total Tasks) × 100
```

The calculated percentage is displayed alongside a progress bar that visually represents the user's progress.

---

## Form Validation and Error Handling

TaskFlow validates user input before creating a task.

Validation includes:

* Task title is required
* Task title must contain at least 3 characters
* Task title cannot exceed 100 characters
* Description cannot exceed 500 characters
* Priority must contain a valid value
* Due dates cannot be in the past

Validation messages are displayed directly within the application rather than relying only on browser alert dialogs.

Successful task creation also provides user feedback.

This helps users understand what information needs to be corrected before a task can be created.

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
```

Tasks remain available after refreshing the page, provided the user continues using the same browser and has not cleared the stored data.

---

## Responsive Design

TaskFlow has been designed to work across different screen sizes.

Responsive improvements include:

* Flexible container widths
* Responsive statistics cards
* Responsive task controls
* Mobile-friendly search and filtering controls
* Stacked task action buttons on smaller screens
* Responsive form layouts
* Mobile-friendly buttons
* Appropriate spacing on smaller screens
* Responsive typography

The application supports:

* Desktop computers
* Tablets
* Mobile devices

---

## Accessibility

Accessibility support has been incorporated to make TaskFlow easier to use for a wider range of users.

Accessibility improvements include:

* Semantic HTML elements
* Accessible labels for form controls
* Keyboard-accessible controls
* Visible keyboard focus indicators
* `:focus-visible` styling
* Appropriate input sizing
* Mobile-friendly control sizes
* Visually hidden elements where appropriate
* Responsive layouts
* Clear validation and feedback messages

The application provides visible focus indicators when users navigate interactive controls using the keyboard.

---

## Project Structure

```text
taskflow-169421/
│
├── css/
│   └── taskflow-style.css
│
├── js/
│   └── script.js
│
├── evidence/
│   ├── conflict_evidence_1.png
│   ├── conflict_evidence_2.png
│   └── conflict_evidence_3.png
│
├── index.html
├── README.md
└── submission.md
```

---

## Development Workflow

TaskFlow was developed using Git and GitHub as part of a structured software development workflow.

The project uses:

* GitHub Issues
* GitHub Milestones
* GitHub Project Board
* Feature branches
* Conventional commit messages
* Pull Requests
* Code review
* GitHub Pages deployment

Branches were organized using descriptive naming conventions such as:

```text
feat/
fix/
style/
docs/
conflict/
```

This approach allowed individual development tasks to be tracked, implemented, reviewed, and merged independently.

---

## Development Phases

The project was developed through multiple development phases.

### Phase 1 — Project Setup and Core Task Management

The first phase established the TaskFlow project structure and implemented the core task management functionality.

Key functionality included:

* Project setup
* Task creation
* Task display
* Task editing
* Task deletion
* Task completion
* LocalStorage persistence

### Phase 2 — Task Organization and Management

The second phase expanded the task management functionality.

Features included:

* Task search
* Task filtering
* Task priorities
* Due dates
* Improved task controls

These features improved the user's ability to organize and locate tasks.

### Phase 3 — Statistics and Progress Tracking

The third phase introduced statistics and task progress tracking.

Features included:

* Total task statistics
* Pending task statistics
* Completed task statistics
* High-priority task statistics
* Completion percentage
* Visual completion progress bar

### Phase 4 — Validation, Responsiveness, and Accessibility

The final phase focused on improving reliability, usability, responsiveness, and accessibility.

Features included:

* Form validation
* Error handling
* Success feedback
* Responsive design
* Mobile support
* Keyboard accessibility
* Visible focus indicators
* Accessible form controls

---

## Testing

TaskFlow was manually tested throughout development.

Testing covered:

* Creating tasks
* Editing tasks
* Completing tasks
* Returning tasks to pending
* Deleting tasks
* Searching for tasks
* Filtering tasks
* Assigning priorities
* Assigning due dates
* Form validation
* Validation error messages
* Success messages
* Statistics calculations
* Completion percentage
* Progress bar
* LocalStorage persistence
* Responsive layouts
* Keyboard navigation
* Focus indicators

The application was also checked after major development changes to ensure that the project remained functional.

---

## Deployment

TaskFlow is deployed as a static web application using GitHub Pages.

Because the application uses HTML, CSS, and JavaScript without a backend server, it can be hosted directly as static files.

**Live Application:**

https://is-project-2026.github.io/taskflow-169421/

---

## Project Management

Project development and progress were tracked using GitHub project management features.

These included:

* **Issues** for individual development tasks
* **Milestones** for organizing project phases
* **Project Board** for tracking task progress
* **Feature branches** for isolated development
* **Pull Requests** for reviewing and merging changes
* **Conventional commits** for maintaining a clear Git history

The workflow provided traceability between project requirements, development tasks, branches, commits, and pull requests.

---

## Limitations

TaskFlow currently uses browser LocalStorage for task storage.

As a result:

* Tasks are stored locally in the user's browser.
* Tasks are not synchronized between different devices.
* There is no user authentication system.
* There is no cloud database.
* Tasks cannot currently be shared between users.

These limitations are appropriate for the scope of the static web project.

---

## Future Improvements

Potential future improvements include:

* User authentication
* Cloud-based task storage
* Multi-device synchronization
* Task categories
* Task reminders
* Recurring tasks
* Calendar integration
* Drag-and-drop task organization
* Dark mode
* Backend API integration
* Multi-user collaboration
* Advanced task analytics

---

## Repository

**GitHub Repository:**

https://github.com/IS-PROJECT-2026/taskflow-169421

---

## Author

**Jamie Nguru Kibanya**

---

## License

This project was developed as an academic project for educational purposes.
