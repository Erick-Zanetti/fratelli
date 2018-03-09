var valoresFrete = [
    7, // centro
    8, // fraron
]
function calculaFrete() {
    var id = document.getElementById('frete');
    id = id.value;
    if (valoresFrete[id]) {
        document.getElementById('valorDoFrete').innerHTML = 'Seu frete fica: ' +  valoresFrete[id]
    } else {
        document.getElementById('valorDoFrete').innerHTML = '';
        
    }
}

function carregaPagina(pagina) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("conteudoPagina").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", pagina, true);
    xhttp.send();
}
carregaPagina("home/home.html");