function Somar(n1, n2) {
    let resultado = n1 + n2;
    console.log(`Resultado: ${resultado}`);
}

Somar(2, 3);

function SomarRetorno(n1, n2) {
    return `Resultado: ${n1 + n2}`;
}

let soma = SomarRetorno(3, 4)
console.log(soma);

function MaiorDeIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let idade = 18
let ehMaior = MaiorDeIdade(idade);
console.log(ehMaior);