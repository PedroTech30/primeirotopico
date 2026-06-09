// 1. Efeito de Digitação
const text = "Para mulher mais linda...";
const typingElement = document.getElementById('typing-text');
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 120);
    }
}
// Inicia a digitação assim que a página carrega
window.onload = typeWriter;

// 2. Contagem Regressiva 
const dataConheceu = new Date(2026, 4, 30); 

function updateTimer() {
    const agora = new Date();
    const diff = agora - dataConheceu;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / 1000 / 60) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    const display = document.getElementById('time-counter');
    if(display) {
        display.innerHTML = `${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
    }
}
// Atualiza a cada 1 segundo
setInterval(updateTimer, 1000);
updateTimer(); // Chama na hora para não piscar "Carregando..."

// 3. Player de Áudio
const playBtn = document.getElementById('play-btn');
const audio = document.getElementById('musica-principal');

playBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playBtn.innerText = "⏸ Pausar";
    } else {
        audio.pause();
        playBtn.innerText = "▶ Iniciar Trilha Sonora";
    }
});

// 4. O Botão Fujão (Otimizado para Mobile)
const btnNo = document.getElementById('btn-no');
const ctaSection = document.getElementById('convite');

function moveButton(e) {
    e.preventDefault(); // Impede o clique
    
    // Pega as dimensões do container do convite
    const containerRect = ctaSection.getBoundingClientRect();
    const btnRect = btnNo.getBoundingClientRect();

    // Calcula limites para o botão não sair da tela do celular
    const maxX = containerRect.width - btnRect.width - 20;
    const maxY = 100; // Limita o movimento vertical para não atrapalhar a tela

    // Gera posições aleatórias
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY) - 50;

    btnNo.style.position = 'absolute';
    btnNo.style.left = `${randomX}px`;
    btnNo.style.top = `${randomY}px`;
    btnNo.style.transform = `translate(0, 0)`; // Reseta transform do CSS
}

// Ouve tanto o toque no celular quanto o mouse no PC
btnNo.addEventListener('touchstart', moveButton);
btnNo.addEventListener('mouseover', moveButton);
btnNo.addEventListener('click', moveButton); // Garantia extra