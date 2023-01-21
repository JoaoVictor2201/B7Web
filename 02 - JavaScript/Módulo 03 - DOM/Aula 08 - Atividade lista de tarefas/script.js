const ul = document.querySelector('ul');
const input = document.querySelector('input');

function submitTask(e) {
    if(e.code === 'Enter') {
        const newTask = input.value;
        ul.innerHTML += `<li>${newTask}</li>`;
        input.value = '';
    }
}

input.addEventListener('keyup', submitTask)