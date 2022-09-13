function adicionarFilme(){
    var cf = document.getElementById("filme").value
    if (cf.endsWith(".jpg")){
        lft(cf)            
    } else{
        console.error("Endereço de Filme Invalido")
    }
    document.getElementById("filme").value = ""

}
function lft(cf){
    var elementocf = "<img src=" + cf + ">"
    var listaFilmes = document.getElementById("listaFilmes")
    listaFilmes.innerHTML= listaFilmes.innerHTML +elementocf
}