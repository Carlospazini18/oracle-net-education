// declarando as variáveis
numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

console.log(numeroSecreto);

// 
function exibirTexoNaTela(tag, texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
}

// gerando número aleatório 
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function verificarChute() {
    // pego o valor inserido pelo usuário
    let chute = document.querySelector('input').value;

    // Verifico se a resposta está correta
    if (chute == numeroSecreto) {

        exibirTexoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1? 'tentativas' :  'tentativa';
        let textoTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTexoNaTela('p', textoTentativa);

        document.getElementById('reiniciar').removeAttribute('disabled');

        return;

    } else {

        // verificando se o o numero é maior ou menor para reornar um feedback
        if (chute < numeroSecreto) {
            exibirTexoNaTela('p', `O numero secreto é maior do que ${chute}`);
        } else {
            exibirTexoNaTela('p', `O numero secreto é menor do que ${chute}`);
        }

        //somando uma tentativa no contador para armazenar a quantidade de tentativas
        tentativas ++;

        limparCampo()
    }

}

function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = '';
}

function novoJogo() {
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();

    exibirTexoNaTela('h1', 'Adivinhe o número secreto');
    exibirTexoNaTela('p', 'Escolha um número entre 1 a 10');
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true)
    
}