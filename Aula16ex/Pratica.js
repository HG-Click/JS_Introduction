let relatorio = [] //Variavel composta a ser preenchida com os valores adicionados  pelo usuario
relatorio.sort()

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

function maior (n) {
    return n
}

function finalizar () {
    var res = window.document.querySelector('div#res')
    res.innerHTML = `VETOR atual igual a ${relatorio}`

/*
    relatorio.sort()
    var res = window.document.querySelector('div#res')
    res.innerHTML = `Ao todo, temos <strong>${relatorio.length}</strong> números adicionados.
    <p>O maior valor informado foi ${maior(relatorio)}</p>
    <p>O menor valor informado foi ${relatorio}</p>
    <p>Somando todos os valores, temos ${relatorio}</p>
    <p>A média dos valores digitados é ${relatorio}.</p>`
*/
}