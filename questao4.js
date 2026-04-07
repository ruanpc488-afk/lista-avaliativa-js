let prod = "Mouse";
let valor = 60.00;
let estoque = 5;
let compraQtd = 10; // O que o usuário quer comprar

if (compraQtd > estoque) {
    console.log("Erro: Não temos estoque suficiente");
} else {
    let final = valor * compraQtd;
    
    // Desconto para compras caras
    if (final > 500) {
        final = final - (final * 0.05);
        console.log("Desconto de 5% aplicado");
    }
    
    console.log("Compra do produto " + prod + " aprovada");
    console.log("Total a pagar: " + final);
}
