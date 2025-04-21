function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const category = document.getElementById('category');
    const taskList = document.getElementById('taskList');

    if (taskInput.value && taskDate.value && category.value) {
        const li = document.createElement('li');
        li.textContent = `${taskInput.value} | ${new Date(taskDate.value).toLocaleString()} | ${category.value}`;
        taskList.appendChild(li);

        // Clear inputs after adding
        taskInput.value = '';
        taskDate.value = '';
        category.selectedIndex = 0;
    }
}

function clearTasks() {
    document.getElementById('taskList').innerHTML = '';
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
