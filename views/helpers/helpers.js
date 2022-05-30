export function avaliacao (quantidade, posicao) {
    if (posicao <= quantidade) return "solid";
    else return "regular";
}

export function verificaNota (notaAtual, nota) {
    if (notaAtual == nota) return "selected";
}