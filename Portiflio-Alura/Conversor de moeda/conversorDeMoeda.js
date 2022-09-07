

function ConverterReal() {
    var valorElemento = document.getElementById("valor1")
    var valor = valorElemento.value
    var valorNumber = parseFloat(valor)
  
    var valorEmRealDolar = valorNumber * 5
    console.log(valorEmRealDolar)

    
  
    var valorElemento = document.getElementById("v1")
    var valorEmRealDolar = "Valor em R$ " + valorEmRealDolar
    valorElemento.innerHTML = valorEmRealDolar
}

    function ConverterEuro() {
        var valorElemento = document.getElementById("valor2")
        var valor = valorElemento.value
        var valorNumber2 = parseFloat(valor)

    var valorEmRealEuro = valorNumber2 * 7
    console.log(valorEmRealEuro) 

    var valorElemento = document.getElementById("valorConvertidoEuro")
    var valorEmRealEuro = "Valor em R$ " + valorEmRealEuro
    valorElemento.innerHTML = valorEmRealEuro
    
  }

  function ConverterBit() {
    var valorElemento = document.getElementById("valor3")
    var valor3 = valorElemento.value
    var valorNumber3 = parseFloat(valor3)

var valorEmRealBit = valorNumber3.toFixed(2) * 40.92
console.log(valorEmRealBit) 

var valorElemento = document.getElementById("valorConvertidoBit")
var valorEmRealBit = "Valor em R$ " + valorEmRealBit
valorElemento.innerHTML = valorEmRealBit

}

  