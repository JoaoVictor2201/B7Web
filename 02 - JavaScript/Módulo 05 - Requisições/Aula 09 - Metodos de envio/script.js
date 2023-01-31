// https://jsonplaceholder.typicode.com/posts - URL utilizada

// GET, POST, PUT, DELETE
// GET -> Pegar informações
// POST -> Mandar informações
// PUT -> Alterar informações
// DELETE -> Remover informações

function clicou() {

    fetch('https://jsonplaceholder.typicode.com/po2sts')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            alert(`Titulo do primeiro post: ${json[0].title}`);
        })
        .catch((error) => {
            console.log(error);
        })

}

function inserir() {
    fetch(
        'https://jsonplaceholder.typicode.com/posts',
        { // Especificações para realizar um método post
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ // Informações da estrtura da própria API
                title: 'Titulo teste',
                body: 'Corpo de teste',
                userID: 2
            })
        })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
        })
}

document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#inserir').addEventListener('click', inserir)