// Seleção dos elementos HTML
const contadorElemento = document.getElementById('contador');
const btnAumentar = document.getElementById('btnAumentar');
const btnResetar = document.getElementById('btnResetar');
const nomeInput = document.getElementById('nomeInput');
const saudacaoElemento = document.getElementById('saudacao');
const body = document.body;

let contador = 0;

// Função para aumentar o contador
btnAumentar.addEventListener('click', () => {
    contador++;
    contadorElemento.textContent = `Contador: ${contador}`;
    mudarCorFundo();
});

// Função para resetar o contador
btnResetar.addEventListener('click', () => {
    contador = 0;
    contadorElemento.textContent = `Contador: ${contador}`;
    body.style.backgroundColor = '#f0f2f5'; // Resetando para a cor inicial
});

// Função de interação com o nome do usuário
nomeInput.addEventListener('input', () => {
    const nome = nomeInput.value;
    if (nome) {
        saudacaoElemento.textContent = `Olá, ${nome}!`;
    } else {
        saudacaoElemento.textContent = 'Olá, usuário!';
    }
});

// Função para mudar a cor de fundo dependendo do contador
function mudarCorFundo() {
    if (contador > 5) {
        body.style.backgroundColor = '#d4edda'; // Verde claro
    } else {
        body.style.backgroundColor = '#f0f2f5'; // Cor padrão
    }
}