//codigo carro

let xCarros = [500, 700, 600, 500, 700, 600];
let yCarros = [40, 98, 150, 210, 263, 320];
let velocidadeCarros = [2, 5, 4, 5, 4, 3]
let alturaCarro = 40
let comprimentoCarro = 50
   
function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    image(imagemCarros [i], xCarros [i], yCarros [i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < xCarros.length; i = i +1){
    xCarros [i] -= velocidadeCarros [i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < xCarros.length; i = i + 1){
    if( xCarros [i] < - 50){
      xCarros [i] = 800
    }
  }
}