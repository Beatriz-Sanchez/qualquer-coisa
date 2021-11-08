class Form {
  constructor() {}

  display() {
    var titulo = createElement('h2');
    titulo.html("Jogo de Corrida");
    titulo.position(130, 0);

    //cria elementos html (botão, entrada e texto)
    var input = createInput("");
    document.getElementsByTagName("INPUT")[0].placeholder = "Name";
    var button = createButton("Jogar");
    var greeting = createElement("h3");

    //ajeita posição dos elementos html
    input.position(130, 160);
    button.position(200, 220);

    //quando clicar no botão
    button.mousePressed(function () {
      //esconder entrada e botão
      input.hide();
      button.hide();

      var nome = input.value();

      //aumentar o valor do numJogadores e atualizar o nome do jogador no banco de dados
      numJogadores += 1;
      jogador.update(nome);
      jogador.updateCount(numJogadores);

      //mostrar mensagem de boas-vindas
      greeting.html("Olá " + nome);
      greeting.position(180, 160);
    });
  }
}