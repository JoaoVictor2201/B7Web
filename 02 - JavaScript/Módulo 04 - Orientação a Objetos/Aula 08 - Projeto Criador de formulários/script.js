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
        formElement.setAttribute('action', this.action);

        for(let i in this.itens) {
            this.itens[i].render(formElement);
        }

        this.container.appendChild(formElement);
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

    render(formElement) {
        let element = document.createElement('input');
        element.type = this.type;
        element.name = this.name;
        element.placeholder = this.placeholder;
        element.required = this.required;
        formElement.appendChild(element);
    }

}

class Button extends Input {

    constructor(placeholder) {
        super('', placeholder);
        this.type = 'submit';
    }

    render(formElement) {
        let element = document.createElement('input');
        element.type = this.type;
        element.value = this.placeholder;
        formElement.appendChild(element);
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

form.renderForm();