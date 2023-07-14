document.addEventListener("DOMContentLoaded", function () {
	const addButton = document.querySelector("#add-button");
	const taskInput = document.querySelector("#task-input");
	const taskContainer = document.querySelector(".display-tasks");
	const errorMsg = document.getElementById("error-msg");

	let isEditMode = false; // Track whether we are in edit mode
	let currentTaskContainer = null; // Track the current task container element

	addButton.addEventListener("click", function (event) {
		event.preventDefault();
		const taskValue = taskInput.value.trim(); // Trim the task value

		if (taskValue !== "") {
			if (isEditMode) {
				// If we are in edit mode, update the task description
				const taskDescription = currentTaskContainer.querySelector(
					".task-description p"
				);
				taskDescription.textContent = taskInput.value;
				isEditMode = false;
				addButton.textContent = "Add";
				taskInput.value = "";
				errorMsg.textContent = "Task Edited successfully";
				errorMsg.style.display = "block";
				setTimeout(function () {
					errorMsg.style.display = "none";
					errorMsg.style.color = "#f9fba5ff";
				}, 3000);
			} else {
				createTask(taskValue);
				taskInput.value = "";
				errorMsg.textContent = "Task Added successfully";
				errorMsg.style.display = "block";
				setTimeout(function () {
					errorMsg.style.display = "none";
					errorMsg.style.color = "#f9fba5ff";
				}, 3000);
			}
		} else {
			errorMsg.textContent = "Task cannot be empty";
			errorMsg.style.display = "block";
			errorMsg.style.color = "red";
			setTimeout(function () {
				errorMsg.style.display = "none";
				errorMsg.style.color = "#f9fba5ff";
			}, 3000);
		}
	});

	taskContainer.addEventListener("click", function (event) {
		if (event.target.classList.contains("fa-trash-alt")) {
			const task = event.target.closest(".task-container");
			errorMsg.textContent = "Task deleted successfully";
			errorMsg.style.display = "block";
			setTimeout(function () {
				errorMsg.style.display = "none";
				errorMsg.style.color = "red";
			}, 3000);
			task.remove();
			saveTasksToLocalStorage();
		} else if (event.target.classList.contains("fa-edit")) {
			const taskContainer = event.target.closest(".task-container");
			const taskDescription = taskContainer.querySelector(
				".task-description p"
			);
			taskInput.value = taskDescription.textContent;
			currentTaskContainer = taskContainer;
			isEditMode = true;
			addButton.textContent = "Save";

			taskInput.focus();
		} else if (
			event.target.classList.contains("task-description") ||
			event.target.parentElement.classList.contains("task-description")
		) {
			const taskDescription = event.target.classList.contains(
				"task-description"
			)
				? event.target
				: event.target.parentElement;
			taskDescription.classList.toggle("completed");
			saveTasksToLocalStorage();
		}
	});

	// Load tasks from local storage
	loadTasksFromLocalStorage();

	function createTask(value) {
		const newTask = document.createElement("div");
		newTask.classList.add("task-container");
		newTask.innerHTML = `
      <div class="task">
        <div class="task-description">
          <p>${value}</p>
        </div>
        <div class="task-date">
          <p>${getCurrentDate()}</p>
        </div>
        <div class="task-time">
          <p>${getCurrentTime()}</p>
        </div>
        <div class="task-edit">
          <i class="fas fa-edit"></i>
        </div>
        <div class="task-delete">
          <i class="fas fa-trash-alt"></i>
        </div>
      </div>
    `;

		taskContainer.appendChild(newTask);
		saveTasksToLocalStorage();
	}

	function saveTasksToLocalStorage() {
		const tasks = taskContainer.innerHTML;
		localStorage.setItem("tasks", tasks);
	}

	function loadTasksFromLocalStorage() {
		const savedTasks = localStorage.getItem("tasks");
		if (savedTasks) {
			taskContainer.innerHTML = savedTasks;
		}
	}
});

function getCurrentDate() {
	const date = new Date();
	const options = { year: "numeric", month: "long", day: "numeric" };
	return date.toLocaleDateString("en-US", options);
}

function getCurrentTime() {
	const date = new Date();
	const options = { hour: "numeric", minute: "numeric" };
	return date.toLocaleTimeString("en-US", options);
}
document.addEventListener("DOMContentLoaded", function () {
	const addButton = document.querySelector("#add-button");
	const taskInput = document.querySelector("#task-input");
	const taskContainer = document.querySelector(".display-tasks");
	const errorMsg = document.getElementById("error-msg");

	let isEditMode = false; // Track whether we are in edit mode
	let currentTaskContainer = null; // Track the current task container element

	addButton.addEventListener("click", function (event) {
		event.preventDefault();
		const taskValue = taskInput.value.trim(); // Trim the task value

		if (taskValue !== "") {
			if (isEditMode) {
				// If we are in edit mode, update the task description
				const taskDescription = currentTaskContainer.querySelector(
					".task-description p"
				);
				taskDescription.textContent = taskInput.value;
				isEditMode = false;
				addButton.textContent = "Add";
				taskInput.value = "";
				errorMsg.textContent = "Task Edited successfully";
				errorMsg.style.display = "block";
				setTimeout(function () {
					errorMsg.style.display = "none";
					errorMsg.style.color = "#f9fba5ff";
				}, 3000);
			} else {
				createTask(taskValue);
				taskInput.value = "";
				errorMsg.textContent = "Task Added successfully";
				errorMsg.style.display = "block";
				setTimeout(function () {
					errorMsg.style.display = "none";
					errorMsg.style.color = "#f9fba5ff";
				}, 3000);
			}
		} else {
			errorMsg.textContent = "Task cannot be empty";
			errorMsg.style.display = "block";
			errorMsg.style.color = "red";
			setTimeout(function () {
				errorMsg.style.display = "none";
				errorMsg.style.color = "#f9fba5ff";
			}, 3000);
		}
	});

	taskContainer.addEventListener("click", function (event) {
		if (event.target.classList.contains("fa-trash-alt")) {
			const task = event.target.closest(".task-container");
			task.remove();
			saveTasksToLocalStorage();
		} else if (event.target.classList.contains("fa-edit")) {
			const taskContainer = event.target.closest(".task-container");
			const taskDescription = taskContainer.querySelector(
				".task-description p"
			);
			taskInput.value = taskDescription.textContent;
			currentTaskContainer = taskContainer;
			isEditMode = true;
			addButton.textContent = "Save";

			taskInput.focus();
		} else if (
			event.target.classList.contains("task-description") ||
			event.target.parentElement.classList.contains("task-description")
		) {
			const taskDescription = event.target.classList.contains(
				"task-description"
			)
				? event.target
				: event.target.parentElement;
			taskDescription.classList.toggle("completed");
			saveTasksToLocalStorage();
		}
	});

	// Load tasks from local storage
	loadTasksFromLocalStorage();

	function createTask(value) {
		const newTask = document.createElement("div");
		newTask.classList.add("task-container");
		newTask.innerHTML = `
      <div class="task">
        <div class="task-description">
          <p>${value}</p>
        </div>
        <div class="task-date">
          <p>${getCurrentDate()}</p>
        </div>
        <div class="task-time">
          <p>${getCurrentTime()}</p>
        </div>
        <div class="task-edit">
          <i class="fas fa-edit"></i>
        </div>
        <div class="task-delete">
          <i class="fas fa-trash-alt"></i>
        </div>
      </div>
    `;

		taskContainer.appendChild(newTask);
		saveTasksToLocalStorage();
	}

	function saveTasksToLocalStorage() {
		const tasks = taskContainer.innerHTML;
		localStorage.setItem("tasks", tasks);
	}

	function loadTasksFromLocalStorage() {
		const savedTasks = localStorage.getItem("tasks");
		if (savedTasks) {
			taskContainer.innerHTML = savedTasks;
		}
	}
});

function getCurrentDate() {
	const date = new Date();
	const options = { year: "numeric", month: "long", day: "numeric" };
	return date.toLocaleDateString("en-US", options);
}

function getCurrentTime() {
	const date = new Date();
	const options = { hour: "numeric", minute: "numeric" };
	return date.toLocaleTimeString("en-US", options);
}
