// O que é um CALLBACK

document.querySelector('#botao')
    .addEventListener('click', () => { // O callback é a função que será executada quando as condições impostas a ela sejam cumpridas, não antes disso
        alert("Clicou")
    })