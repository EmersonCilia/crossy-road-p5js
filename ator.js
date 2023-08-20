//codigo ator e pontuação

let xAtor = 335;
let yAtor = 370;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);

}
function movimentaAtorY(){
  if(keyIsDown(UP_ARROW)){
    yAtor -=3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
      yAtor +=3;
    }
  }
}
function movimentaAtorX(){
  if(keyIsDown(LEFT_ARROW)){
    if (podeSeMover0())
      xAtor -=3;
  }
  if(keyIsDown(RIGHT_ARROW)){
    if (podeSeMover1())
      xAtor +=3; 
  }
}
function verificaColisao(){
    for (let i = 0; i < imagemCarros.length; i = i + 1){
      colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, (xAtor + 12.8), (yAtor + 14.5), 18);
      if (colisao){
        yAtor = 370;
        somDaColisao.play();
          if (meusPontos > 0){
            meusPontos -= 1;
      }
    }
  }
}

//funções para a pontuação

function incluiPontos(){
  textAlign(CENTER)
  textSize(25);
  fill(255, 240, 60);
  text(meusPontos, width/5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    somDoPonto.play();
    meusPontos += 1;
    yAtor = 370;
  }
}

//funções para limitação da movimentação do ator

function podeSeMover(){
  return yAtor < 370;
}
function podeSeMover0(){
  return xAtor > 0;
}
function podeSeMover1(){
  return xAtor < 670;
}