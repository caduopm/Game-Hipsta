function preload() {
    imagemCenario = loadImage('imagens/cenario/floresta.png');
    imagemCenarioGrama = loadImage('imagens/cenario/grass.png');
    imagemPersonagem = loadImage('imagens/personagem/correndo.png');
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
    imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
    imagemGameOver = loadImage('imagens/assets/game-over.png');
    imagemTelaInicial = loadImage('imagens/assets/telaInicial.png');
    imagemVida = loadImage('imagens/assets/coracao.png');

    fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
    
    somDoJogo = loadSound('sons/trilha_jogo.mp3');
    somDoPulo = loadSound('sons/somPulo.mp3');

    configuracao = loadJSON('configuracao/configuracao.json');
}