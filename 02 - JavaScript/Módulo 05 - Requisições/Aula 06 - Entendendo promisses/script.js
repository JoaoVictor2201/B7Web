// https://jsonplaceholder.typicode.com/posts - URL utilizada

function clicou() {

    fetch('https://jsonplaceholder.typicode.com/posts') // Um Fetch sempre retorna uma promise
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            alert(`Titulo do primeiro post: ${json[0].title}`);
        });

    alert('mensagem assincrona'); // Esse alert será exibido antes do alert da função

}

document.querySelector('#botao').addEventListener('click', clicou)