function Funcao() {

    const input = document.querySelector('.input');
    const password = document.querySelector('.password')
    const button = document.querySelector('button')

    console.log(input.getAttribute('placeholder')); // Seleciona um atributo do elemento
    password.setAttribute('type', 'text')
    password.setAttribute('placeholder', 'Tipo Alterado')

    
}