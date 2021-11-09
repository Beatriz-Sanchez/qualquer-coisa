class Form {
  constructor() {}

  display() {
    var titulo = createElement('h2');
    titulo.html("Jogo de Corrida");
    //titulo.position(130, 0);

    //cria elementos html (botão, entrada e texto)
 
    var input = createInput("",'required');
  
    document.getElementsByTagName("INPUT")[0].placeholder = "Name";
    document.getElementsByTagName("INPUT")[0].id = "FormName";
    console.log(input);
    

    var button = createButton("Jogar");
    var greeting = createElement("h3");
    var nomePorfavor = createElement("h4");
    
    
  
    //ajeita posição dos elementos html
    //input.position(130, 160);
    //button.position(200, 220);

    //quando clicar no botão
    button.mousePressed(function () {
      //esconder entrada e botão
      input.hide();
      button.hide();

      var nome = input.value();
      //presentedBy.html("Presented By Bia &#128151; JJ")

      //aumentar o valor do numJogadores e atualizar o nome do jogador no banco de dados
     
  

      //mostrar mensagem de boas-vindas
      if(nome)
      {
          numJogadores += 1;
          jogador.update(nome);
          jogador.updateCount(numJogadores);
          greeting.html("Olá " + nome +" &#128151;");
        
      }
      else
      {
        nomePorfavor.html("Por favor, insira seu nome para continuar &#128512;");
      }
      
      //greeting.position(540, 250);
    });
  }
}
