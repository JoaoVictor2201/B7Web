function AddExpo(x, y) {
    const Expoente = (num) => {
        return num * num;
    }

    return Expoente(x) + Expoente(y);
}

let resultado = AddExpo(2, 3);
console.log(resultado);