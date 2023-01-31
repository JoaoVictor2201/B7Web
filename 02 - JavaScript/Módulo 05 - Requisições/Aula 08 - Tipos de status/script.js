// https://jsonplaceholder.typicode.com/posts - URL utilizada

function clicou() {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log(`Status: ${response.status}`); // Cada código de status representa um tipo de resposta
            return response.json();
        })
        .then((json) => {
            alert(`Titulo do primeiro post: ${json[0].title}`);
        })
        .catch((error) => {
            console.log(error);
        })

}

document.querySelector('#botao').addEventListener('click', clicou)