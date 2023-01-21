function Funcao() {
    const button = document.querySelector('.botao');

    button.classList.add('verde') // Adiciona uma nova classe no elemento
    button.classList.remove('verde'); // Remove uma classe do elemento
    button.classList.contains('botao'); // Verifica se existe a classe passada no parametro
    button.classList.toggle('azul'); // Faz a altenancia entre adicionar e remover a classe
}