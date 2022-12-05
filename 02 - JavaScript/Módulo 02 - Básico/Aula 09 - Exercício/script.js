// No array abaixo qual índice seleciona a Ferrari?
let carros = ['BMW', 'Ferrari', 'Mercedes'];
console.log(carros[1]);

// Troque a Ferrari por Audi
carros[1] = 'Audi';
console.log(carros);

// Adicione o Volvo a lista
carros.push('Volvo');
console.log(carros);

// Exiba quantos itens tem no array
console.log(`Quantidade de itens no array: ${carros.length}`);