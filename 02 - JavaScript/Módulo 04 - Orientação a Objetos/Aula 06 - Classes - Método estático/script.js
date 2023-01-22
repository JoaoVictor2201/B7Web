class Person {

    static hands = 2; // Referente a classe e não ao objeto
    age = 0;
    
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`Olá, eu tenho ${Person.hands} mãos`); // Necessita ser chamado a propria classe para exibir o valor
    }

}

let pessoa1 = new Person('João');

pessoa1.sayHi();