var carta1 = {
    nome: "Saitama",
    imagem:"http://pm1.narvii.com/7272/19cb3b8a0d7745413e5049ce7de27d341a450ac0r1-468-902v2_uhq.jpg",
    atributos:{
        ataque:100,
        defesa:55,
        poder:15,
        velocidade:99

    }
}

var carta2 = {
    nome: "Goku",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjevVocEBSLYdRPnaalJe1JzUdS0hE-j09KA&usqp=CAU",
    atributos:{
        ataque:98,
        defesa:67,
        poder:95,
        velocidade:75
        
    }
}

var carta3 = {
    nome: "Rukia",
    imagem:"http://pm1.narvii.com/6473/610ad40c2465e430d39e221bcb37296baaf10cf4_00.jpg",
    atributos:{
        ataque:78,
        defesa:56,
        poder:45,
        velocidade:78
        
    }
}

var carta4 = {
    nome: "Ichigo",
    imagem:"https://i.pinimg.com/originals/f2/c8/4f/f2c84fe2c8d011af539b6717cc6e93db.jpg",
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
var numeroCartaMaquina = parseInt(Math.random() * 4)
maquina = cartas[numeroCartaMaquina]
    

var numeroCartaJogador = parseInt(Math.random() * 4)
while (numeroCartaJogador == numeroCartaMaquina){
    numeroCartaJogador = parseInt(Math.random() * 4)
}
jogador = cartas[numeroCartaJogador]
console.log(jogador)
     
document.getElementById("btnSortear").disabled = true
document.getElementById("btnJogar").disabled = false
exibirCartaJogador()

    }

    
function obtemAtributoSelecionado(){
    var radioAtributos = document.getElementsByName("atributo")
    for (var i = 0; i < radioAtributos.length; i++){
        if (radioAtributos[i].checked == true){
            return radioAtributos[i].value
        }
    }
}

function jogar(){
    var AtributoSelecionado = obtemAtributoSelecionado()
    var divresultado = document.getElementById("resultado")

    if (jogador.atributos[AtributoSelecionado] > maquina.atributos[AtributoSelecionado])
        {
         htmlresultado = "<p class='resultado-final'> Ganhou </p>"   
        
    } else if(maquina.atributos[AtributoSelecionado] > jogador.atributos[AtributoSelecionado]){
        htmlresultado = "<p class='resultado-final'> Perdeu </p>" 

    }else {
        htmlresultado = "<p class='resultado-final'> Empatou </p>"   
    }

    divresultado.innerHTML = htmlresultado
    document.getElementById("btnJogar").disabled = true

    exibirCartaMaquina()


}

function exibirCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${jogador.imagem})`

    var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = ""

        for (var atributo in jogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + jogador.atributos[atributo] + "<br>"
        
    }

    var nome = `<p class="carta-subtitle">${jogador.nome}</p>`
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${maquina.imagem})`;
    //divCartaJogador.style.backgroundImage="url(" + cartaJogador.imagem + ")"
    var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in jogador.atributos) {
      opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + maquina.atributos[atributo] + "</p>";
    }

    var nome = `<p class="carta-subtitle">${maquina.nome}</p>`;  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
    
}
  

