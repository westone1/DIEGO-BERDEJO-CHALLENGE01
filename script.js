
var campodetexto = document.getElementById("entradadetexto");
var boton1 = document.querySelector(btnencriptar);
var boton2 = document.querySelector(btndesencriptar);
var boton3 = document.querySelector(btncopiar)
var resultado = document.querySelector(cajadetexto);

function encriptar(){
    borrarcontenido()
    let texto = campodetexto.value.toLowerCase();
    var txtcifrado = texto.replaceAll("e","enter");
    var txtcifrado = txtcifrado.replaceAll("i","imes");
    var txtcifrado = txtcifrado.replaceAll("a","ai");
    var txtcifrado = txtcifrado.replaceAll("o","ober");
    var txtcifrado = txtcifrado.replaceAll("u","ufat");
    
    document.getElementById("btncopiar").style.display="inline-block";
    document.getElementById("cajadetexto").style.display="block";
    document.getElementById("cajadetexto").innerHTML= txtcifrado;
    }

function borrarcontenido(){
    document.getElementById("persona").style.display="none";
    document.getElementById("text001").style.display="none";
    document.getElementById("text002").style.display="none";    
}
function desencriptar(){
    borrarcontenido();
    let texto = campodetexto.value.toLowerCase();
    var txtcifrado = texto.replace(/ai/,"a");
    var txtcifrado = txtcifrado.replace(/enter/,"e");
    var txtcifrado = txtcifrado.replace(/imes/,"i");
    var txtcifrado = txtcifrado.replace(/ober/,"o");
    var txtcifrado = txtcifrado.replace(/ufat/,"u");
    
    document.getElementById("cajadetexto").style.display="block";
    document.getElementById("cajadetexto").innerHTML= txtcifrado;
}
function copiar(){
    var textocopiado = document.getElementById("cajadetexto")
    textocopiado.select()
    document.execCommand("copy")    
    alert("Texto Copiado!")
}