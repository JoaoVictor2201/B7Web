let frutas = ['Maçã', 'Uva', 'Laranja', 'Banana'];

// console.log(frutas);

// frutas.sort(); // Ordena em ordem alfabética

// console.log(frutas);

// frutas.reverse(); // Inverte a ordem do array

// console.log(frutas);

let carros = [
    { marca : 'Fiat', ano : 2022 },
    { marca : 'Bmw', ano: 2018 },
    { marca : 'Ferrari', ano : 2020 }
]

carros.sort((item, prox) => {
    if(item.ano > prox.ano) {
        return 1;
    } else if(item.ano < prox.ano) {
        return -1;
    } else {
        return 0;
    }
})

console.log(carros);