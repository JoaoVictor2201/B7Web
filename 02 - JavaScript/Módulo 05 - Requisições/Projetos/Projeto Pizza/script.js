const select = (el) => document.querySelector(el);
const selectAll = (el) => document.querySelectorAll(el);
let pizzaQtd = 1;
let cart = [];
let modalKey = 0;

// Pizza Listing / Open Modal
pizzaJson.map((item, index) => {
    let pizzaItem = select('.models .pizza-item').cloneNode(true);
    
    pizzaItem.setAttribute('data-pizzaKey', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();
        let pizzaKey = e.target.closest('.pizza-item').getAttribute('data-pizzaKey');
        pizzaQtd = 1;
        modalKey = pizzaKey;
        
        select('.pizzaBig img').src = pizzaJson[pizzaKey].img;
        select('.pizzaInfo h1').innerHTML = pizzaJson[pizzaKey].name;
        select('.pizzaInfo--desc').innerHTML = pizzaJson[pizzaKey].description;
        select('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[pizzaKey].price.toFixed(2)}`;
        select('.pizzaInfo--size.selected').classList.remove('selected');
        selectAll('.pizzaInfo--size').forEach((size, sizeIndex) => {
            if(sizeIndex == 2) {
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[pizzaKey].sizes[sizeIndex];
        });

        select('.pizzaInfo--qt').innerHTML = pizzaQtd;

        select('.pizzaWindowArea').style.opacity = 0;
        select('.pizzaWindowArea').style.display = 'flex';
        setTimeout(() => {
            select('.pizzaWindowArea').style.opacity = 1;
        }, 10);
    });

    select('.pizza-area').append(pizzaItem);
});

// Modal Events

function closeModal() {
    select('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
        select('.pizzaWindowArea').style.display = 'none';
    }, 300);
}

selectAll('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
    item.addEventListener('click', closeModal);
});

selectAll('.pizzaInfo--size').forEach((size) => {
    size.addEventListener('click', () => {
        select('.pizzaInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');
    })
});

select('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if(pizzaQtd > 1) {
        pizzaQtd--;
        select('.pizzaInfo--qt').innerHTML = pizzaQtd;
    }
});

select('.pizzaInfo--qtmais').addEventListener('click', () => {
    pizzaQtd++;
    select('.pizzaInfo--qt').innerHTML = pizzaQtd;
});

// Cart

select('.pizzaInfo--addButton').addEventListener('click', () => {
    const selectedSize = Number(select('.pizzaInfo--size.selected').getAttribute('data-key'));

    let pizzaIdent = pizzaJson[modalKey].id + '@' + selectedSize;

    let verify = cart.findIndex((item) => {
        return item.pizzaIdent == pizzaIdent;
    });

    if(verify > -1) {
        cart[verify].qtd += pizzaQtd;
    } else {
        cart.push({
            pizzaIdent,
            pizza : pizzaJson[modalKey].name,
            id : pizzaJson[modalKey].id,
            size : selectedSize,
            qtd : pizzaQtd
        });
    }
    closeModal();

    console.log(cart);
});