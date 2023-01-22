class Person {

    age = 0;
    
    constructor(name) {
        this.name = name;
    }

}

function createPerson(name, age) {
    let pessoa = new Person(name, age);
    pessoa.age = age;
    return pessoa;
}

let pessoa1 = createPerson('João', 24);
console.log(`${pessoa1.name} tem ${pessoa1.age} anos.`);