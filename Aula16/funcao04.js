//Calculo de fatorial de 5
//5! = 5 x 4 x 3 x 2 x 1 = 120

function fatorial(n){ //Recebe a chamada atribuindo ao parâmetro o valor desejado
    let fat = 1 //Linha ultilizada como multiplicador (5x1) * (4x1)... sendo 1 a variavel "fat"
    for (let c = n;c > 1; c--){//Atribui variavel c (calculo) igual ao valor do parametro, enquanto estiver 
        fat *= c //Linha faz a multipliação do fat pelo c resulante
    }
    return fat //Retorna o resultado da função
}

console.log(fatorial(5)) //Inicia a chamada da function "fatorial" com o valor 5