var database;
var estadoJogo = 0;
var numJogadores;
var form, jogador, jogo;

function setup() {
  database = firebase.database();
  createCanvas(450, 450);
  background('#06003d')
  jogo = new Jogo();
  jogo.getState();
  jogo.start();
}

function draw() {
  
}
