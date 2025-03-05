function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new task element
    let li = document.createElement("li");
    li.innerHTML = `
        ${taskInput.value}
        <button onclick="removeTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = ""; // Clear input field
}

// Remove task function
function removeTask(button) {
    button.parentElement.remove();
}
