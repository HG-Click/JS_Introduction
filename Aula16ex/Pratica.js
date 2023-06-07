let relatorio = [] //Variavel composta a ser preenchida com os valores adicionados  pelo usuario


function adicionar () {
    let num = document.getElementById('numtxt')
    let lista = document.getElementById('lista')

    if (num.value.length == 0) {
    window.alert ('Por favor, digite um número!')
    } else {
    let n = Number(num.value)
        if (n < 1 || n > 100) {
        window.alert ('Valor fora dos parâmetro solicitado!')
        } else {
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        lista.appendChild(item)
        relatorio.push(n)
        }
    }
}

function maior (x){
    relatorio.sort(function(a,b){return b-a})
    return x[0]
}

function menor (y){
    relatorio.sort(function(a,b){return a-b})
    return y[0]
}

function soma (n) {
    relatorio.sort(function(a,b){return a-b})
    let soma = 0
    for (let pos = 0; pos < n.length; pos++) {
        soma += n[pos]
    }
    return soma
}

function media (m) {
    let soma = 0
    for (let i = 0; i < m.length; i++) {
        soma += m[i]
    }
    const media = soma / m.length
    return media
}

function finalizar () {
    var res = window.document.querySelector('div#res')
    res.innerHTML = `Ao todo, temos <strong>${relatorio.length}</strong> números adicionados.
    <p>O maior valor informado foi <strong>${maior(relatorio)}</strong></p>
    <p>O menor valor informado foi <strong>${menor(relatorio)}</strong></p>
    <p>Somando todos os valores, temos <strong>${soma(relatorio)}</strong></p>
    <p>A média dos valores digitados é <strong>${media(relatorio)}</strong></p>`
}



