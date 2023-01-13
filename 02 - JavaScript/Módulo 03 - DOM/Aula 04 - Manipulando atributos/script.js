function Funcao() {

    const input = document.querySelector('.input');
    const password = document.querySelector('.password')
    const button = document.querySelector('button')

    console.log(input.getAttribute('placeholder')); // Seleciona um atributo do elemento
    password.setAttribute('type', 'text')
    password.setAttribute('placeholder', 'Tipo Alterado')

    button.addEventListener('click', () => {
        if (password.getAttribute('type') == 'text') {
            password.setAttribute('type', 'text')
        } else {
            password.setAttribute('type', 'password')
        }
    })
}