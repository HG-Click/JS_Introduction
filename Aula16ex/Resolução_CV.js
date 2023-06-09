let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] //Aqui está o array

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100) { //Verica se o numero é maior que 0 e menos que 100
        return true
    } else {
        return false
    }
}

function inLista (n, l) {
    if (l.indexOf(Number(n)) != -1) { //Se o valor dentro da array  for DIFERENTE de -1 (Quando o valor nao é encontrado)
        return true
    } else {
        return false
    }
}


function adicionar () {
    if (isNumero(num.value)  && !inLista(num.value, valores)){ // Na função lista  o sinal de esclamação "!" significa NÃO
        valores.push(Number(num.value))//Inclui o valor adicionado no ultimo índice do VETOR
        let item = document.createElement('option') //Cria um option chamado item para inclui o valor na lista
        item.text = `Valor ${num.value} adicionado.` //Inclui o valor no item
        lista.appendChild(item)//Mostra o item na lista
        res.innerHTML = ''//Limpa o resultado de finalizar quando  adicionado um novo valor
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value =  '' //Apaga o objeto Num (esvaziar)
    num.focus() //Retorna o curso para o campo que precisa digitar
} 

function finalizar() {
    if (valores.length == 0) {//Caso nenhum valor esteja  preenchido
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length //Quantidade de item no VETOR
        //O primeiro valor de um VETOR não sera maior ou menos pois é unico
        let maior = valores [0] 
        let menor = valores [0]
        let soma = 0
        let media = 0
        for(let pos in valores) { //Analisa cada item do VETOR e retorna o valor que atenda os criterios a seguir 
            soma  += valores[pos] //Realiza a soma  para cada VETOR processado pelo LET e IN
            if (valores[pos] > maior)  //Faz uma varredura (laço de percurso) item a item até retornar o maior de todos
            maior = valores[pos] //Retorna o ultimo valor da posição que atende o criterio 
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando  todos os valores, temos  ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitado é ${media}.</p>`
    }
}