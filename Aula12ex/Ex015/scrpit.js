function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')   
    
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 5) {
                img.setAttribute('src', 'BebM.jpg')
                //Bebe
            } else if  (idade < 14)  {
                img.setAttribute('src', 'CrcM.jpg')
                //Criança
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'AdsM.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'AduM.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'SrM.jpg')
            }            
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 5) {
                img.setAttribute('src', 'BebF.jpg')
                //Bebe
            } else if  (idade < 14)  {
                img.setAttribute('src', 'CrcF.jpg')
                //Criança
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'AdsF.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'AduF.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'SrF.jpg')
            }      
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectado ${genero} com <strong>${idade}</strong> anos.`
        res.appendChild(img)
    }

}