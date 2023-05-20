var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()

msg.innerHTML = `Agora são ${hora}:${min} horas.`
if (hora >= 0 && hora < 12) {
    // BOM DIA!  
    img.src = 'Manha.jpg'
    document.body.style.background = '#67422c'
} else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    img.src = 'Tarde.jpg'
    document.body.style.background = '#e37b24'
} else if (hora >=18 && hora < 24) {
    //BOA NOITE!
    img.src = 'Noite.jpg'
    document.body.style.background = '#283439'
} else {
    alert ('Horário não é válido!')
    msg.innerHTML = 'Horário informado não é válido.'
    img.src = 'Não disponivel'
}