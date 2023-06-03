//RECURSIVIDADE
function fatorial (n){
    if (n == 1){
        return 1
    } else {
        return n * fatorial(n-1) //Chamando a função fatorial novamente para calcular o rescultado
    }
}

console.log (fatorial(3))

/*

5! = 5 x 4 x 3 x 2 x 1 = 120
5! = 5 x 4! >> O fatoria é igual ao valor multiplicado pelo fatorial do valor menos 1

n! = n x (n-1)!
1! = 1

*/