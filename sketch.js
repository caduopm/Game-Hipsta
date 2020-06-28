// essa função é executada apenas uma vez
function setup() {
    createCanvas(windowWidth, windowHeight);
    jogo = new Jogo();
    telaInicial = new TelaInicial();
    botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
    
    jogo.setup();
    //somDoJogo.loop();
    frameRate(40); //define quantos frame por segundo
    cenas = {
        jogo,
        telaInicial
    }
}

function keyPressed() {
    jogo.keyPressed(key);
}

// Loop
function draw() {
    cenas[cenaAtual].draw();
}
