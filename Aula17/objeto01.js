let amigo = {
    nome: 'José', 
    sexo:'M',
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p //O uso de This refere-se diretamente ao objeto
    }

}

amigo.engordar(5) //Inclui a funcionalidade dentro da função
console.log (`${amigo.nome} pesa ${amigo.peso}Kg`)