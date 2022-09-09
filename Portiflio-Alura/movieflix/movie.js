var lista1 = ["https://img1.ak.crunchyroll.com/i/spire2/ab001b1cb053ec0d7b1b47b0f7bf98e71647329181_full.jpg,https://img1.ak.crunchyroll.com/i/spire2/f9fb623496136ec595edb8476df6915d1647329350_main.jpg,https://br.web.img3.acsta.net/pictures/19/09/18/13/46/0198270.jpg,https://img1.ak.crunchyroll.com/i/spire1/be611b65eb36149005789b740efc7a361333664528_main.jpg"]

var lista2 = ["https://s2.glbimg.com/GvosfckqI9HsqO4MsfH-64XvEXM=/e.glbimg.com/og/ed/f/original/2020/11/27/episodio_iv._uma_nova_esperanca.jpg,https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFrwkqbgLUvH_-2JikyM_3fUN8ZsdY77Tf_g&usqp=CAU,https://cdn.ome.lt/zDdNmHdVJz0TwHL3yJfap3K-GZA=/fit-in/837x500/smart/uploads/conteudo/fotos/star-wars-celebration-poster.jpeg"]

for (var indi = 0; indi < lista1.length; indi++) {
    document.write("<img src=" + lista1 [indi] + ">");
    
}

for (var i = 0; i < lista2.length; i++){
    document.write(`<img src=${lista2[i]}>`)
}

