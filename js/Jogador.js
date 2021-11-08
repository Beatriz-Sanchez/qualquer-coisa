class Jogador {
  constructor() {}
  getCount() {
    //pegar informação do numero de jogadores
    var refNumJogadores = database.ref('numJogadores');
    refNumJogadores.on("value", function (data) {
      numJogadores = data.val();
    });
  }
  //atualizar o numero de jogadores
  updateCount(num) {
    database.ref('/').update({
      numJogadores: num
    });
  }
  //atualizar nome do jogador
  update(nome) {
    var indiceJogador = 'jogador' + numJogadores;
    database.ref(indiceJogador).set({
      nome: nome
    });
  }
}