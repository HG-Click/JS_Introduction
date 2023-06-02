function tabuada() {
    //Atribuir veriáveis
    let num = document.getElementById('txtn') //Pegar o numero do usuário
    let tab = document.getElementById('seltab') //Interagir o click com a div tabuada

    // Mensagem se o campo Numero estiver vazio
    if (num.value.length == 0) { //Se o campo estiver sem nenhum caracter
        window.alert('Por favor, digite um número!') //Mensagem de erro
    } else {
        let n = Number(num.value) //Considera o numero do usuario como value
        //Inicio de loop para a quantidade de opções desejada
        let c = 0 //Variavel recebe o valor 0, pela qual começa a tabuada
        tab.innerHTML = '' //Antes de calcular outro valor, limpar a tabuada atual
        while (c <= 10) { //Loop soma c até a quantidade de multiplicação desejada
            let item = document.createElement('option') //Criação de elemento "Option" no html
            item.text = `${n} x ${c} = ${n*c}` //Texto apresentado pelo elemento "Item" para cada "oprtion"
            item.value = `tab${c}` //Atribui a cada linha (option) um valor unico (Util para outras liguagens)
            tab.appendChild(item) //Faz aparecer o item na lista
            c++ //Some do c até atingir o limite desejado
        }
    }
}
