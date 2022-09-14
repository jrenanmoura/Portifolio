var carta1 = {
    nome: "Saitama",
    atributos:{
        ataque:100,
        defesa:55,
        poder:15,
        velocidade:99

    }
}

var carta2 = {
    nome: "Goku",
    atributos:{
        ataque:98,
        defesa:67,
        poder:95,
        velocidade:75
        
    }
}

var carta3 = {
    nome: "Mai",
    atributos:{
        ataque:78,
        defesa:56,
        poder:45,
        velocidade:78
        
    }
}

var carta4 = {
    nome: "Ichigo",
    atributos: {
        ataque:87,
        defesa:85,
        poder:88,
        velocidade:82
        
    }
}

var cartas = [carta1, carta2, carta3, carta4]
var maquina
var jogador

function sortearCarta() {
var numeroCartaMaquina = parseInt(Math.random() * 3)
maquina = cartas[numeroCartaMaquina]
    

var numeroCartaJogador = parseInt(Math.random() * 3)
while (numeroCartaJogador == numeroCartaMaquina){
    numeroCartaJogador = parseInt(Math.random() * 3)
}
jogador = cartas[numeroCartaJogador]
console.log(jogador)
     
document.getElementById("btnSortear").disabled = true
document.getElementById("btnJogar").disabled = false

exibirOpcoes()
    }

    function exibirOpcoes(){
        var opcoes = document.getElementById("opcoes")
        var opcoesTexto = ""

        for (var atributo in jogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
        
    }
    opcoes.innerHTML = opcoesTexto
}