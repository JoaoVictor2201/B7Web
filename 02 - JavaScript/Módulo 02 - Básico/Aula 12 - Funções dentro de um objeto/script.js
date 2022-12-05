let pessoa = {
    nome : 'João',
    sobrenome : 'França',
    idade : 23,
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log(pessoa.nomeCompleto());