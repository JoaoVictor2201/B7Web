function add() {
    let count = 0; /** não pode ser acessada fora da função  */
    count++;
}

add();
add();

console.log(count);