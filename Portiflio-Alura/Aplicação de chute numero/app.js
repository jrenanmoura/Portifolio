var numero = parseInt(Math.random() * 11);



function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var elementoResultado = document.getElementById("resultado");

  console.log(chute);
    if (chute == numero) {
    elementoResultado.innerHTML = "Acertou Parabéns!!!! ";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Digite um número de 0 a 10!!";
  } else {
    elementoResultado.innerHTML = "Tente novamente o numero era " + numero;
  }
}
