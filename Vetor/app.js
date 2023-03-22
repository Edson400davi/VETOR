let objetos = ['Cadeira', 'Impressora', 'Garfo']
function add() {
    let input = document.querySelector('.botao')
    let valor = document.querySelector('.botao').value

    if (valor == '') {
        alert('informe um valor válido!')
    } else if (objetos.indexOf(valor) !== -1) {
        alert('Já temos esse objeto :(')
    } else{
        objetos.push(valor)
        console.log(objetos)
        input.value = " "
    }
}
function ord() {
    console.log(objetos.sort())
}
