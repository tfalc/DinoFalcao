const char = document.querySelector(".char");
const scenario = document.querySelector(".scenario");
let isJumping = false;
let isGameOver = false;
let position = 0;
let pontos = 0;

function pressionaTeclaCima(evento) {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
        }
    }
}

function jump() {
    isJumping = true;
    let upInterval = setInterval(() => {
        if (position >= 210) {
            clearInterval(upInterval);

            //Queda do char
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    char.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            //Pulo do char
            position += 20;
            char.style.bottom = position + 'px';
        }
    }, 20);
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    scenario.appendChild(cactus);
    cactus.style.left = cactusPosition + 'px';

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            scenario.removeChild(cactus);
            pontos++;
            let placar = document.createElement('div');
            scenario.appendChild(placar);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            //Game over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">VOCÊ PERDEU!</h1>'
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', pressionaTeclaCima)