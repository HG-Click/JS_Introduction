/*
> O sort() executa uma organizaçao entre índices. Essa funçao definida dentro do sort() faz a comparaçao entre um par de índices para definir quem ela vai organizar e em qual ordem. Respondendo sua dúvida, podemos considerar que (a) é o índice inicial [0] e (b) é o próximo índice [1,2...] em relaçao ao primeiro [0] ou ao anterior que já foi comparado. Torna-se necessário definir os valores sendo ab(crescente em ordem alfabética) ou ba(decrescente em ordem alfabética) para conseguir o resultado esperado de forma bem definida. 
Exemplo:  

let num = [300,1,0,400]

console.log(num.sort(function(a, b){return a-b}))

ponto a = 300
ponto b = 1 

se a > b  (se 300 for maior que 1),  entao ele vai inverter os valores (a recebe o valor 1 e b recebe o valor 300) dos índices e continuar verificando até terminar de organizar a array (nesse primeiro exemplo (a) recebe o primeiro índice [0] e (b) recebe o segundo índice  [1]).  

Um segundo exemplo: 
> Considerando que os dois primeiros índices foram organizados e o índice [0] tem o valor = 1:

ponto a recebe o valor 300 (índice [1])
ponto b recebe o valor 0 (índice [2])
 
se a > b entao a funçao inverte os valores e 

ponto a recebe o valor 0 (índice [1])
ponto b recebe o valor 300 (índice [2])

E após essa verifiçao, a funçao retorna ao índice [0] e compara com o índice [1] novamente para poder prosseguir, sempre respeitando a regra crescente (a < b).

> Considerando que a nova ordem é [1,0,300,400]

A funçao vai comparar novamente os valores dos índices [0] e [1], vai verificar se a > b e se for: vai organizar na ordem de a < b (crescente) invertendo os valores dos índices.


ponto a recebe o valor 0 (índice [0])
ponto b recebe o valor 1 (índice [1])


e como o valor 300 (índice[2]) é menor que o valor 400 (índice[3]) (a < b) a funçao cumpre seu papel, organizando a array de forma crescente [0,1,300,400], e é finalizada.
*/