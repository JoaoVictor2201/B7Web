class Person {

    steps = 0;
    _age = 0;
    
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    takeAStep() {
        this.steps++;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}` // Uma função que serve como variável para retornar valores de objetos
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if(typeof age == 'number') {
            this._age = age;
        }
    }

}

let pessoa1 = new Person('João');
let pessoa2 = new Person('Maria');
let pessoa3 = new Person('Ronaldo');

pessoa1.takeAStep();
console.log(`Passos de ${pessoa1.name}: ${pessoa1.steps}`);