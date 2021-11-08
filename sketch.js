var database;
var estadoJogo = 0;
var numJogadores;
var form, jogador, jogo;

function setup() {
  database = firebase.database();
  createCanvas(450, 450);
  jogo = new Jogo();
  jogo.getState();
  jogo.start();
}

function draw() {
  
}