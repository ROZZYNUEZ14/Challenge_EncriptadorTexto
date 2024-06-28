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
    let arrayText = valorTexto.split(" ");
    let resultadoEncriptado = [];

    for(let i = 0; i < arrayText.length; i++){
        let palabra = arrayText[i];
        let primeraPalabra = palabra.charAt(0);
        if(primeraPalabra === primeraPalabra.toUpperCase()){
            resultadoEncriptado.push(palabra);
        }else{
            let palabraNormalizada = palabra.normalize('NFD').replace(/[\u0300-\u036f]/g,"");

            let textoVocales = palabraNormalizada.replace(/[a]/g, "{a}")
                                                    .replace(/[e]/g, "{e}")
                                                    .replace(/[i]/g, "{i}")
                                                    .replace(/[o]/g, "{o}")
                                                    .replace(/[u]/g, "{u}")

            let palabraEncriptada = textoVocales.replace(/{a}/g, "ai")
                                                .replace(/{e}/g, "enter")
                                                .replace(/{i}/g, "imes")
                                                .replace(/{o}/g, "ober")
                                                .replace(/{u}/g, "ufat")
            
            resultadoEncriptado.push(palabraEncriptada);
        }
    }
    
    
    console.log(cajaEntradaTexto.value);
    
    let textoEncriptado = resultadoEncriptado.join(" ");
    console.log(textoEncriptado);
    parrafoSalidaTexto.innerHTML = textoEncriptado;
    
    display();

    return textoEncriptado;
    
}


