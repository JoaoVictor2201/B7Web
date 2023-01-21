class Person {

    steps = 0;
    age = 0;
    
    constructor(name, age) {
        this.name = name;
    }

    takeAStep() {
        this.steps++; // inserção de funções dentro de uma classe
    }

    setAge(newAge) {
        if (typeof newAge == 'number') {
            this.age = newAge
        }
    }

}

let pessoa1 = new Person('João');
let pessoa2 = new Person('Maria');
let pessoa3 = new Person('Ronaldo');

pessoa1.takeAStep();
console.log(`Passos de ${pessoa1.name}: ${pessoa1.steps}`);

pessoa1.setAge(30);
console.log(`${pessoa1.name} tem ${pessoa1.age} anos`);