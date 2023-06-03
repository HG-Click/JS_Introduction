//Usando a estrutura de repetição para as posições
let valores = [8,1,7,8,5]

console.log(valores)

/*
//CONTAGEM MANUAL
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])
console.log(valores[7])
console.log(valores[8])
console.log(valores[9])
console.log(valores[10])


//CONTAGEM COM AUTOMAÇÃO SIMPLES
console.log(`Considerando o VETOR ${valores}`)

for(let pos=0;pos < valores.length;pos++){
    console.log(`A posição ${pos} deste Vetor é igual a ${valores[pos]}`)
}
*/

//CONTAGEM COM AUTOMAÇÃO APRIMORADA
for(let pos in valores){ // -- Para cada posição(pos) dentro do VETOR (valores)
    console.log(`A posição ${pos} deste VETOR é igual a ${valores[pos]}`) //Fazer  o seguinte processo
}