// https://jsonplaceholder.typicode.com/posts - URL utilizada

function clicou() {

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json(); // Transforma a resposta em um objeto para poder ser lido
    })
    .then((json) => {
        alert(`Titulo do primeiro post: ${json[0].title}`);
    })

}

document.querySelector('#botao').addEventListener('click', clicou)