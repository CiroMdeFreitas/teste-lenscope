// Trata as mudanças de valores
function grauOnChange(grau, id) {
    // Checa e força o limite de dados
    if((grau % 0.25 != 0) || (grau > 0)) {
        document.getElementById(id).value = 0;
    }
    else if((grau < -15) && (id.includes("Esferico"))) {
        document.getElementById(id).value = -15;
    }
    else if((grau < -6) && (id.includes("Cilindrico"))) {
        document.getElementById(id).value = -6;
        return;
    }
    
    // Adquire os parametros
    const grauEsfericoEsquerdo = document.getElementById("grauEsfericoEsquerdo").value;
    const grauCilindricoEsquerdo = document.getElementById("grauCilindricoEsquerdo").value;
    const grauEsfericoDireito = document.getElementById("grauEsfericoDireito").value;
    const grauCilindricoDireito = document.getElementById("grauCilindricoDireito").value;

    // Checa se as opções são válidas
    if(checarPrime(grauEsfericoEsquerdo, grauCilindricoEsquerdo) || checarPrime(grauEsfericoDireito, grauCilindricoDireito)) {
        document.getElementById("lentePrime").disabled = false;
        document.getElementById("lenteVision").disabled = true;
        return;
    } else {
        document.getElementById("lentePrime").disabled = true;
    }
    if(checaVision(grauCilindricoEsquerdo) || checaVision(grauCilindricoDireito)) {
        document.getElementById("lenteVision").disabled = false;
        return;
    } else {
        document.getElementById("lenteVision").disabled = true;
        return;
    }
}

// Checa se Lente Prime é uma opção válida
function checarPrime(grauEsferico, grauCilindrico) {
    if((grauEsferico <= -3) && (grauEsferico >= -12)) {
        if(grauCilindrico === 0) {
            document.getElementById("lentePrime").disabled = false;
            document.getElementById("lenteVision").disabled = true;
            return true;
        } else if((grauCilindrico >= -2) && (grauEsferico >= -10)) {
            document.getElementById("lentePrime").disabled = false;
            document.getElementById("lenteVision").disabled = true;
            return true;
        }
    }

    return false;
}

// Checa se Lente Vision é uma opção válida
function checarVision(grauCilindrico) {
    if(grauCilindrico <= -5) {
        return true;
    }

    return false;
}