class Char extends GameObject {
    //Altura e largura padrão
    static width = 64;
    static height = 64;

    constructor(content, x, y, vx, vy) {
        super(content, x, y, vx, vy)
    }
}

class GameObject {
    constructor(context, x, y, vx, vy) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;

        this.isColliding = false;
    }
}

//Animação
let numColumns = 6;
let numRows = 1;

//Definição do tamanho do sprite
let frameWidth = sprite.width / numColumns;;
let frameHeight = sprite.height / numRows;;

//Iniciar sprite na posição 0
let currentFrame = 0;

setInterval(() => {
    //Escolher um novo frame
    currentFrame++;

    //Repetir os frames
    let maxFrame = numColumns * numRows - 1;
    if (currentFrame > maxFrame) {
        currentFrame = 0;
    }

    //Atualização de colunas e linhas
    let column = currentFrame % numColumns;
    let row = Math.floor(currentFrame / numColumns);

    //Limpar e desenhar
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(sprite, column * frameWidth, row * frameHeight, frameWidth, frameHeight, 64, 64, frameWidth, frameHeight);

    //Esperar pelo próximo passo na repetição
}, 100);