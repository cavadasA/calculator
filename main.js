function botonDeNumero (event) {
    var numero = event.innerHTML;
    return document.getElementById("displayCalculadora").innerHTML = numero;
}

function suma (event) {
    var nuevoValor = numero + numero;
    return document.getElementById("displayCalculadora").innerHTML = nuevoValor;
}