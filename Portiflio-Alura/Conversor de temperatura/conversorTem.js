

function ConverterF() {
    var valorElemento = document.getElementById("n1")
    var valor = valorElemento.value
    var valorNumber = parseFloat(valor)
  
    var temp1 = valorNumber * 
    console.log(temp1.tofixed(2))

    
  
    var valorElemento = document.getElementById("n2")
    var valor1 = "Valor em R$ " + valorEmRealDolar
    valorElemento.innerHTML = valor1
}

    function ConverterK() {
        var valorElemento = document.getElementById("valor2")
        var valor = valorElemento.value
        var valorNumber2 = parseFloat(valor)

    var valorEmRealEuro = valorNumber2 * 7
    console.log(valorEmRealEuro) 

    var valorElemento = document.getElementById("valorConvertidoEuro")
    var valorEmRealEuro = "Valor em R$ " + valorEmRealEuro
    valorElemento.innerHTML = valorEmRealEuro
    
  }


}

  