//Takes the input from the user.
const taskInput = document.getElementById('input');
//Takes the list of tasks.
const taskList = document.getElementById('tasks');

//Function to add a task to the list.
function addTask() {
    //Takes the value of the input field and removes any whitespace.
    const task = taskInput.value.trim();

    //Checks if the input field is empty.
    if (task !== '') {
        //Creates a new list item.
        let li = document.createElement('li');
        //Sets the text content of the list item to the task.
        li.textContent = task;
        //Adds the class 'task-item' for styling purposes.
        li.classList.add('task-item')
        //Adds an event listener to the list item to toggle the class 'completed' when clicked.
        li.addEventListener('click', completeTask);

        //Creates a new button element for deletion.
        const deleteBtn = document.createElement('button');
        //Adds the class 'delete-btn' for styling purposes.
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'X';
        //Adds an event listener to the button to delete the task when clicked.
        deleteBtn.addEventListener('click', deleteTask);
        li.appendChild(deleteBtn);

        //Appends the list item to the list of tasks.
        taskList.appendChild(li);
        //Clears the input field.
        taskInput.value = '';
    }
}

//Function to toggle the class 'completed' when a task is clicked.
function completeTask(event) {
    const task = event.target;
    task.classList.toggle('completed');
}

//Function to delete a task.
function deleteTask(event) {
    const task = event.target.parentElement;
    taskList.removeChild(task);
}