//Na situação de não atribuir valor para o parametro ele fica indefinido
function soma(n1=0, n2=0) { //Quando atribui igual a 0 evita de ficar indefinido
    return n1 + n2
}

console.log(soma(2)) //Atribuindo o valor 2 no elemento n1 e nenhum valor para o n2