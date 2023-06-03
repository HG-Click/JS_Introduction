/*
FUNÇÕES - Curso JavaScript 

São ações executadas assim que são chamadas ou em decorrência de algum evento
Uma  função pode receber parâmetros e retornar um resultado

function ação (AQUI FICARÁ OS PARÂMETROS){

}
*/
function parimpar(n){ //PARÂMETRO:: Dentro dos parenteses está o PARÂMETRO
    if (n%2 == 0){ //AÇÃO::: Alçao realizada
        return 'Par!'
    } else {
        return 'ímpar!'//RETORNO:::O resultado da função
    }
}
console.log(parimpar(56)) //CHAMADA:: linha que fará o disparo da função "parimp"
