/*
FUNÇÕES - Curso JavaScript 

São ações executadas assim que são chamadas ou em decorrência de algum evento
Uma  função pode receber parâmetros e retornar um resultado

function ação (AQUI FICARÁ OS PARÂMETROS){

}
*/
function parimpar(n){ //Dentro dos parenteses está o parâmetro
    if (n%2 == 0){ //Ação realizada
        return 'Par!'
    } else {
        return 'ímpar!'//Retorno ou resultado da função
    }
}
console.log(parimpar(56)) //Chamada, linha que fará o disparo da função "parimp"
