function Funcao() {
    const element = document.querySelector('.teste');
    console.log(element.children); // Seleciona os elementos filhos, se passado com colchetes ele se comporta como um array, selecionando o elemento passado dentro do colchetes

    const ul = element.querySelector('.teste ul');
    ul.innerHTML += "<li>conteudo alterado</li>" // Modifica o conteudo html do elemento

    ul.children[0].append('(alterado)') // Adiciona um conteudo junto com o conteudo que ja estava no elemento, mas funciona só com texto
    
    const newLi = document.createElement('li');
    newLi.innerText = 'Item adicionado'

    ul.appendChild(newLi); // Adciona um elemento no final do conteudo q ja tem

    const elementoNovo = document.createElement('button');
    elementoNovo.innerText = 'botão';

    ul.after(elementoNovo); // Adiciona um elemento novo depois do elemento selecionado

}