document.addEventListener("DOMContentLoaded", function () {
	const addButton = document.querySelector("#add-button");
	const taskInput = document.querySelector("#task-input");
	const taskContainer = document.querySelector(".display-tasks");
	const errorMsg = document.getElementById("error-msg");

	let isEditMode = false;
	let currentTaskContainer = null;

	addButton.addEventListener("click", function (event) {
		event.preventDefault();
		const taskValue = taskInput.value.trim();

		if (taskValue !== "") {
			if (isEditMode) {
				const taskDescription = currentTaskContainer.querySelector(
					".task-description p"
				);
				taskDescription.textContent = taskInput.value;
				isEditMode = false;
				addButton.textContent = "Add";
				taskInput.value = "";
				displayMessage("Task Edited successfully");
			} else {
				createTask(taskValue);
				taskInput.value = "";
				displayMessage("Task Added successfully");
			}
		} else {
			displayMessage("Task cannot be empty", "red");
		}
	});

	taskContainer.addEventListener("click", function (event) {
		if (event.target.classList.contains("fa-trash-alt")) {
			const task = event.target.closest(".task-container");
			task.remove();
			saveTasksToLocalStorage();
			displayMessage("Task Removed successfully");
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
				? event.target.querySelector("p")
				: event.target.parentElement.querySelector("p");
			taskDescription.classList.toggle("completed");
			const taskName = taskDescription.textContent;
			const message = taskDescription.classList.contains("completed")
				? `Task "${taskName}" marked as completed`
				: `Task "${taskName}" marked as incomplete`;
			displayMessage(message);
			saveTasksToLocalStorage();
		}
	});

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

	function displayMessage(message, color = "#f9fba5ff") {
		errorMsg.textContent = message;
		errorMsg.style.color = color;
		errorMsg.style.visibility = "visible";
		setTimeout(function () {
			errorMsg.style.visibility = "hidden";
		}, 3000);
	}
});
