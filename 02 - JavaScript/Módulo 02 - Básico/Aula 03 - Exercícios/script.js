/** Calcule a porcentagem de um número
 *  Exemplo: 25% de 40 é 10
 *  Fórmula da porcentagem: (x / y) * 100
 */

function Porcentagem(n1, n2) {
    let resultado = (n2 / n1) * 100;
    return resultado;
}

let x = 200;
let y = 30;
let pct = Porcentagem(x, y);
console.log(`${pct}% de ${x} é ${y}`);

/** Calcule o preço de um imóvel
 *  metroQuadrado = 3.000
 *  Se tiver 1 quarto: metroQuadrado = 1x
 *  Se tiver 2 quartos: metroQuadrado = 1.2x
 *  Se tiver 3 quartos: metroQuadrado = 1.5x
 */

function CalcularImovel(metragem, quartos) {
    let metroQuadrado = 3000;
    if (quartos === 1) {
        return metragem * metroQuadrado;
    } else if (quartos === 2) {
        return metragem * (metroQuadrado * 1.2);
    } else if (quartos === 3) {
        return metragem * (metroQuadrado * 1.5);
    } else {
        return `Quantidade de quartos inválida`;
    }
}

let metragem = 123;
let quartos = 1;
let preco = CalcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);

/** Crie uma função de validação de usuário
 *  usuário correto: tonyyjk
 *  senha correta: Kiko@123
 */

function ValidateLogin(user, password) {
    let getUser = "tonyyjk";
    let getPassword = "Kiko@123";

    if (user === getUser && password === getPassword) {
        return 'Acesso liberado';
    } else {
        return 'Acesso negado';
    }
}

let acesso = ValidateLogin('tonyyjk', 'Kiko@123');
console.log(acesso);