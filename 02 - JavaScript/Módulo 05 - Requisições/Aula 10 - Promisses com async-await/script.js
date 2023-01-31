// https://jsonplaceholder.typicode.com/posts - URL utilizada

async function clicou() {

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    alert(`Titulo do primeiro post: ${json[0].title}`);

    alert('Clicou');

}

async function inserir() {
    let response = await fetch(
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
        });
    let json = await response.json();
    console.log(json);
}

document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#inserir').addEventListener('click', inserir)