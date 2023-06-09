let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista (n, l) {
    if (l.indexOf(Number(n)) != -1) { //Se o valor dentro da array  for DIFERENTE de -1 (Quannto o valor nao é encontrado)
        return true
    } else {
        return false
    }
}


function adicionar () {
    if (isNumero(num.value) && !inLista(num.value, valores)){ // Sinal de esclamação "!" significa NÃO
        valores.push(Number(num.value))
        let item = document.createElement('option') //Croa um option para inclui o valor na lista
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value =  '' //Apaga o objeto Num (esvaziar)
    num.focus() //Retorna o curso para o campo que precisa digitar
} 

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores [0] //O primeiro valor de um VETOR não sera maior ou menos pois é unico
        let menor = valores [0]
        let soma = 0
        let media = 0
        for(let pos in valores) { //Analisa cada item do VETOR e retorna o valor que atenda os criterios a seguir 
            if (valores[pos] > maior)  //Faz uma varredura (laço de percurso) item a item até retornar o maior de todos
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML

    }
}