function ConverterDolar() {
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value
    var valorNumber = parseFloat(valor)
  
    var valorEmRealDolar = valorNumber * 5
    console.log(valorEmRealDolar)

    
  
    var valorElemento = document.getElementById("valorConvertidoReal")
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
  