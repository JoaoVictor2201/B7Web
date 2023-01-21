// function apertou() {
//     console.log('apertou');
// }

// function segurou() {
//     console.log('segurou');
// }

function soltou(event) {
    console.log(event.code); // Identifica qual tecla foi apertada
}

const input = document.querySelector('input');
input.addEventListener('keyup', soltou);