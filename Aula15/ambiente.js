// VARIAVEIS COMPOSTAS //
/*
Diferença entre variaveis simples e compostas
    VARIAVEIS SIMPLES    -   Só conseguem armazenar *UM VALOR* por vez
    VARIAVEIS COMPOSTAS  -   Devem ser capazes de armazenar *VÁRIOS VALORES* em uma mesma estrutua

let vaga = [    ,   ,   ] //Ultilizar conchetes e virgula para cada chave ou índice
1 - A "vaga" torna-se um VETOR ou ARRAY
    VETOR:Váriavel com vários espaços
2 - Um vetor é composto de ELEMENTOS
    ELEMENTOS: Um par que agrupa o espaço da memória, o valor colocado dentro dele e o ÍNDICE
3 - Cada ELEMENTO é composto por ÍNDICE e seu VALOR
    ÍNDICE: tambem chamado de CHAVE (Key em inglês), trata-se do código de indentificão (posição)
    VALOR: O conteúdo da variavel
*/
//EXEMPLOS
let num = [5, 4, 3] 
console.log(num)
num[3] = 6 //Coloca o valor 6 na posição 3 automaticamente SAIDA : [5, 4 ,3 , 6]
console.log(`Com o valor ${num[3]}, o novo vetor é igual a ${num}`)
num.push(7) //Cria uma nova posição e inclui o valor 7 SAIDA : [5, 4 ,3 , 6, 7]
console.log(`Incluindo o novo valor ${num[4]} no ultimo elemento, o VETOR fica igual a ${num}`)
num.length //Retorna o comprimento, ou quantidade de elementos do VETOR SAIDA: 5
console.log(`A quantidade de elementos deste VETOR é igual a ${num.length} posições`)
num.sort() //Deixa os elementos ordenados SAIDA: [3, 4, 5, 6, 7]
console.log(`Colocando esse vetor ordenado fica ${num.sort()}`)

//Busca de valores no VETOR
let pos = num.indexOf(2)
    if (pos == -1){
    console.log(`O valor informado não foi encontrado`)
    }else{
    console.log(`O valor desejado está na posição ${pos}`)
    }
