

function ConverterF() {
    var valorElemento = document.getElementById("n1")
    var valor = valorElemento.value
    var valorNumber = parseFloat(valor)
  
    var temp1 = valorNumber * 1.8 + 32
    console.log(temp1)
    
    var valorElemento = document.getElementById("v1")
    var valor1 = "Temperatura de  " + temp1 + "°F"
    valorElemento.innerHTML = valor1
}

    function ConverterK() {
        var valorElemento = document.getElementById("n2")
        var valor = valorElemento.value
        var valorNumber2 = parseFloat(valor)

    var temp2 = valorNumber2 + 273.15
    console.log(temp2) 

    var valorElemento = document.getElementById("v2")
    var valor2 = "Temperatura de  " + temp2 + "°K"
    valorElemento.innerHTML = valor2
    
  }


  