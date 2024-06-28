const cajaSalidaTexto = document.getElementById("salida-texto-caja");
const imagenCajaSalidaTexto = document.getElementById("imagenSalidaTexto");
const cajaEntradaTexto = document.getElementById("ingreso_texto");
const parrafoSalidaTexto = document.getElementById("parrafoSalidaTexto");
const botonCopiar = document.getElementById("botonCopiar")


function display() {
    cajaSalidaTexto.style.display = "none";
    botonCopiar.style.display = "block";
    
}


function encriptarValor(){
    let valorTexto = cajaEntradaTexto.value
    valorTexto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");

    let textoVocales = valorTexto.replace(/[a]/g, "{a}")
                                    .replace(/[e]/g, "{e}")
                                    .replace(/[i]/g, "{i}")
                                    .replace(/[o]/g, "{o}")
                                    .replace(/[u]/g, "{u}")

    let textoEncriptado = textoVocales.replace(/{a}/g, "ai")
                                    .replace(/{e}/g, "enter")
                                    .replace(/{i}/g, "imes")
                                    .replace(/{o}/g, "ober")
                                    .replace(/{u}/g, "ufat")
   
    console.log(cajaEntradaTexto.value);
    console.log(textoEncriptado)
    
    parrafoSalidaTexto.innerHTML = textoEncriptado

    display();
}


