// Recebe os dados (Simulando entrada de dados)
let nomeProduto = "Teclado Mecânico";
let precoUnitario = 150.00;
let quantidade = 25;

let desconto = 0;

// Lógica de desconto baseada na quantidade
if (quantidade > 20) {
    desconto = 0.20; // 20%
} else if (quantidade > 10) {
    desconto = 0.10; // 10%
}

// Cálculos
let valorTotalSemDesconto = precoUnitario * quantidade;
let valorDesconto = valorTotalSemDesconto * desconto;
let precoFinal = valorTotalSemDesconto - valorDesconto;

// Exibição dos resultados
console.log(`Produto: ${nomeProduto}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Preço Final com desconto: R$ ${precoFinal.toFixed(2)}`);
