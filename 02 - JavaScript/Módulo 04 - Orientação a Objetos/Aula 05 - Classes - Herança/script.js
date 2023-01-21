class Person {

    age = 0;
    
    constructor(name) {
        this.name = name;
    }

    dizerOla() {
        console.log(`${this.name} diz oi!`);
    }

}

class Student extends Person { // Herdando as informações da classe importada
    
    constructor(name, id) {
        super(name); // Referencia o atributo da classe importada
        this.id = id;
    }
}

let pessoa1 = new Student('João', 1);
pessoa1.dizerOla();