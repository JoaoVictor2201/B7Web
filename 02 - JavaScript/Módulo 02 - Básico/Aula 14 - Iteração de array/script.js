let frutas = ['Maçã', 'Uva', 'Laranja', 'Banana'];

let maisDe4Letras = frutas.filter((item) => { // Filtra os itens do array que satisfazem a condição
    if(item.length > 4) {
        return true;
    } else {
        return false;
    }
});

console.log(maisDe4Letras);

frutas.every((item) => { // Retorna somente se TODOS os itens satisfazem a condição
    if(item.length > 3) {
        return true;
    } else {
        return false;
    }
})

frutas.some((item) => { // Retorna se ao menos um item satisfaz a condição
    if(item.length > 3) {
        return true;
    } else {
        return false;
    }
})

if(frutas.includes('Uva')) { // Verifica se existe algum índice com o valor passado
    return true;
} else {
    return false;
}