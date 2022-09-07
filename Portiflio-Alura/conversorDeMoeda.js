function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorDolarNumber = parseFloat(valor);
  
    var valorEmReal = valorDolarNumber * 5;
    console.log(valorEmReal);
  
    var convertido = document.getElementById("valorConvertido");
    var valorEmReal = "Valor em R$ " + valorEmReal;
    convertido.innerHTML = valorEmReal;
  }
  