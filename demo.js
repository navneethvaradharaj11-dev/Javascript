let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask() {

    let input = document.getElementById("taskInput");
    let date = document.getElementById("taskDate");
    let priority = document.getElementById("priority");
    let category = document.getElementById("category");

    if (input.value == "") {
        alert("Enter a Task");
        return;
    }

    let task = {
        name: input.value,
        date: date.value,
        priority: priority.value,
        category: category.value,
        completed: false
    };

    tasks.push(task);

    saveTasks();

    displayTasks();

    input.value = "";
    date.value = "";
}

function displayTasks() {

    let list = document.getElementById("taskList");

    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        let li = document.createElement("li");

        if (tasks[i].completed == true) {
            li.style.textDecoration = "line-through";
        }

        li.innerHTML =
            tasks[i].name +
            " | Date : " + tasks[i].date +
            " | Priority : " + tasks[i].priority +
            " | Category : " + tasks[i].category +
            " ";

        let complete = document.createElement("button");

        complete.innerText = "Completed";

        complete.onclick = function () {

            tasks[i].completed = !tasks[i].completed;

            saveTasks();

            displayTasks();

        };

        let edit = document.createElement("button");

        edit.innerText = "Edit";
        edit.className = "edit-btn";

        edit.onclick = function () {
            let newName = prompt("Edit task name:", tasks[i].name);
            if (newName !== null && newName.trim() !== "") {
                tasks[i].name = newName.trim();
                saveTasks();
                displayTasks();
            }
        };

        let del = document.createElement("button");

        del.innerText = "Delete";

        del.onclick = function () {

            tasks.splice(i, 1);

            saveTasks();

            displayTasks();

        };

        li.appendChild(edit);
        li.appendChild(complete);
        li.appendChild(del);

        list.appendChild(li);

    }

    document.getElementById("count").innerText = tasks.length;

}

function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}