// https://jsonplaceholder.typicode.com/posts - URL utilizada

function clicou() {

    fetch('https://jsonplaceholder.typicode.com/po2sts')
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            alert(`Titulo do primeiro post: ${json[0].title}`);
        })
        .catch((error) => { // Função utilizada para quando a requisição retorna um erro
            console.log(error);
        })
        .finally(() => { // Função que será executada após tanto um sucesso quanto um erro
            console.log('Acabou');
        })

}

document.querySelector('#botao').addEventListener('click', clicou)