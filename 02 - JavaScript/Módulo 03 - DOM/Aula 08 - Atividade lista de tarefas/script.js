const ul = document.querySelector('ul');
const input = document.querySelector('input');

function submitTask(e) {
    if(e.code === 'Enter') {
        const newTask = document.createElement('li');
        newTask.innerHTML = input.value;
        ul.appendChild(newTask);
        input.value = '';
    }
}

input.addEventListener('keyup', submitTask)