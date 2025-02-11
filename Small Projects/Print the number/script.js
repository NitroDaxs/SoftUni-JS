let taskInput = document.getElementById('input');

function printNumber() {
    let number = taskInput.value;
    let outputList = document.getElementById('output');

    outputList.innerHTML = '';
    taskInput.value = '';

    for (let i = 0; i <= number; i++) {
        li = document.createElement('li');
        li.textContent = i;
        outputList.appendChild(li);
    }

}

function clearOutput() {
    let outputList = document.getElementById('output');
    outputList.innerHTML = '';
}