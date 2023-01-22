class Form {

    itens = [];
    method = 'GET';

    constructor(container, method, action) {
        this.container = document.querySelector(container);
        this.method = method;
        this.action = action;
    }

    addItem(item) {
        this.itens.push(item);
    }

    renderForm() {
        let formElement = document.createElement('form');
        formElement.setAttribute('method', this.method);
    }

}

class Input {

    _type = 'text';
    required = false;

    constructor(name, placeholder) {
        this.name = name;
        this.placeholder = placeholder;
    }

    get type() {
        return this._type;
    }

    set type(t) {
        if(['text', 'password', 'email', 'submit'].includes(t)) {
            this._type = t;
        } else {
            throw new Error(`input "${t}" type does not exist.`);
        }
    }

}

class Button extends Input {

    constructor(placeholder) {
        super('', placeholder);
        this.type = 'submit';
    }

}

// IMPLEMENTAÇÃO

// Formulário
let form = new Form('.formArea', 'POST', 'https://site.com.br');

// Email
let email = new Input('email', 'Digite seu email');
email.type = 'email';
email.required = true;
form.addItem(email);

// Senha
let password = new Input('password', 'Digite sua senha');
password.type = 'password';
form.addItem(password);

// Botão
let button = new Button('Enviar');
form.addItem(button);

console.log(form.itens);