let senhaCerta = "1234";
let tentativas = 3;

// Simulando as tentativas do usuário
let entrada = "1111"; 

if (entrada == senhaCerta) {
    console.log("Acesso permitido");
} else {
    tentativas = tentativas - 1;
    console.log("Senha errada. Tentativas que restam: " + tentativas);
    
    // Se errar a primeira, o sistema continuaria pedindo, 
    // mas para um código básico, a lógica de checagem é essa:
    if (tentativas == 0) {
        console.log("Acesso bloqueado");
    }
}
