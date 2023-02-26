
document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

var nome = document.getElementById("nome").Value
var email = document.getElementById("email").Value


function validaFormulario() {
    if (nome != "" && email != ""){
        alert("Obrigada por enviar um email!")
    }
    else{
        alert("Existem campos vazios")
    }
}