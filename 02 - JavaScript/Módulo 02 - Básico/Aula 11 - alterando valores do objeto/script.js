let personagem = {
    nome : 'João',
    idade : 23,
    pais: 'Brasil',
    atributos : {
        força : 20,
        mana : 100,
        inteligencia : 60
    }
}

personagem.atributos.inteligencia += 10;

console.log(personagem.atributos.inteligencia);
