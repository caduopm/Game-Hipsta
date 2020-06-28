class Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
        this.matriz = matriz;
        this.imagem = imagem; //imagem que vai ter animada
        this.x = x; // posição da imagem no canvas em relação ao eixo X
        this.variacaoY = variacaoY;
        this.largura = largura; // largura total da imagem no canvas
        this.altura = altura; // altura total da imagem no canvas
        this.y = height - this.altura - this.variacaoY; // posição da imagem no canvas em relação ao eixo Y
        this.larguraSprite = larguraSprite;
        this.alturaSprite = alturaSprite;

        this.frameAtual = 0;
    }

    exibe() {
       //                                                                              lado de dentro da imagem
       //                                                                          x                                 y                       larg                  alt
       image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);
       //   circle(mouseX, mouseY, 50); ideia pra outro jogo

       this.anima();
    }

   
    anima(){
        this.frameAtual++

        if (this.frameAtual > this.matriz.length -1) {
            this.frameAtual = 0;
        }
    }
}