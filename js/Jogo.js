class Jogo {
    constructor() {}
    //pegar estado de jogo
    getState() {
        var estadoJogo = database.ref("estadoJogo");
        estadoJogo.on("value", function (data) {
            estadoJogo = data.val();
        });
    }

    //atualizar estado de jogo
    update(estado) {
        database.ref('/').update({
            estadoJogo: estado
        });
    }
    //iniciar o jogo
    start() {
        if (estadoJogo === 0) {
            jogador = new Jogador();
            jogador.getCount();
            form = new Form();
            form.display();
        }
    }
}