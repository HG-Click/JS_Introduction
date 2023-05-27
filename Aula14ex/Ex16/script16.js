function contar() {
    var tn0 = window.document.getElementById('tn0')
    var tnf = window.document.getElementById('tnf')
    var tnx = window.document.getElementById('tnx')
    var n0 = Number(tn0.value)
    var nf = Number(tnf.value)
    var nx = Number(tnx.value)
    var res = window.document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute ('id', 'foto')
    res.innerHTML = 'Contando: <br>' //Quebra a proxima linha

    if (tn0.value.length == 0 || tnf.value.length == 0){
        res.innerHTML ='Incluir valores para continuar'
        window.alert ('[ERRO] Campos vazios')
        return; //TERMINA O SCRIPT POR AQUI
    
    } if (nx <= 0 ) { // o código nao considera nx maior que o valor maior em n0 ou nf
        window.alert ('[ATENÇÃO] Passo inválido considerando PASSO 1')
        nx = 1

    } if (n0 > nf) {
        // CONTAGEM REGRESIVA
    for (n0 ;n0 >= nf; n0 -= nx) {
        res.innerHTML += ` ${n0} `
        img.setAttribute ('src', 'Apontando.png')
        res.appendChild (img)
    }
    }  else { 
        //CONTAGEM CRESCENTE
    for (n0 ;n0 <= nf; n0 += nx) {
        res.innerHTML += ` ${n0} `
        img.setAttribute ('src', 'Apontando.png')
        res.appendChild (img)
        }
    }
        //IMAGEM DE CHEGADA
    img.setAttribute('src', 'Chegada.png')
    res.appendChild (img)
}