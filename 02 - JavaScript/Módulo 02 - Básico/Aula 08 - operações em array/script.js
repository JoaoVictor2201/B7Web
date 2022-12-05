let ingredientes = ['água', 'farinha', 'ovo', 'açúcar', 'chantily'];

ingredientes.push('mel'); // Insere itens no final do array

console.log(ingredientes);

ingredientes.pop();

console.log(ingredientes); // Remove o último item do array

ingredientes.shift();

console.log(ingredientes); // Remove o primeiro item do array

console.log(ingredientes.join(' teste ')); // Cria uma string sendo o separador o parametro passado

console.log(`total de ingredientes: ${ingredientes.length}`);


