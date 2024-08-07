const cajaSalidaTexto = document.getElementById("salida-texto-caja");
const imagenCajaSalidaTexto = document.getElementById("imagenSalidaTexto");
const cajaEntradaTexto = document.getElementById("ingreso_texto");
const parrafoSalidaTexto = document.getElementById("parrafoSalidaTexto");
const botonCopiar = document.getElementById("botonCopiar");
const errorMayusculas = document.getElementById("errorMayusculas");
const errorCaracteresEspeciales = document.getElementById("errorCaracteresEspeciales");
const errorTildes = document.getElementById("errorTildes");

function display() {
    cajaSalidaTexto.style.display = "none";
    botonCopiar.style.display = "block";
    
}

errorMayusculas.style.display = 'none';
errorCaracteresEspeciales.style.display = 'none';
errorTildes.style.display = 'none';

function encriptarValor(){
    let valorTexto = cajaEntradaTexto.value
    let arrayText = valorTexto.split(" ");
    let resultadoEncriptado = [];

    for(let i = 0; i < arrayText.length; i++){
        let palabra = arrayText[i];
        let caracteresEspeciales = /([¿?$&.'¡!"@])/g;
        let vocalConTilde = /([áéíóú])/g;
        //let primeraLetra = palabra.charAt(0);

        if(palabra !== palabra.toLowerCase()){
            //alert("Ingresa solo palabras en minusculas");
            let mensajeError = "No hay texto válido que mostrar";
            errorMayusculas.style.display = 'block';
            return mensajeError;
            
        }else if(caracteresEspeciales.test(palabra)){
            //alert("Solo ingresar palabras, no caracteres especiales.");
            let mensajeError2 = "No hay texto válido que mostrar";
            errorCaracteresEspeciales.style.display = 'block';
            return mensajeError2;
        }else{
            
            if(vocalConTilde.test(palabra)){
                //alert("Evita ingresar palabras con tildes");
                let mensajeError3 = "No hay texto válido que mostrar";
                errorTildes.style.display = 'block';
                return mensajeError3;
            
            }else{
                errorMayusculas.style.display = 'none';
                errorCaracteresEspeciales.style.display = 'none';
                errorTildes.style.display = 'none';

                let palabraNormalizada = palabra;
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
    }
    
    console.log(cajaEntradaTexto.value);

    let textoEncriptado = resultadoEncriptado.join(" ");
    console.log(textoEncriptado);

    return textoEncriptado;
    
    
}

function botonEncriptar(){
    parrafoSalidaTexto.innerHTML = encriptarValor();
    display();
    
    return parrafoSalidaTexto;
}

function botonDesencriptar(){

    let obtenerTextoDesencriptar = cajaEntradaTexto.value;
    console.log(obtenerTextoDesencriptar)
    let textoObtenidoArray = obtenerTextoDesencriptar.split(" ");
    let resultadoDesencriptado = [];

    for(let i = 0; i < textoObtenidoArray.length; i++){
        let palabraObtenida = textoObtenidoArray[i];
        
        let palabraNormalizada = palabraObtenida.normalize('NFD').replace(/[\u0300-\u036f]/g,"");

        let textoVocalesDes = palabraNormalizada.replace(/ai/g, "{a}")
                                                .replace(/enter/g, "{e}")
                                                .replace(/imes/g, "{i}")
                                                .replace(/ober/g, "{o}")
                                                .replace(/ufat/g, "{u}")

        let palabraDesencriptada = textoVocalesDes.replace(/{a}/g, "a")
                                            .replace(/{e}/g, "e")
                                            .replace(/{i}/g, "i")
                                            .replace(/{o}/g, "o")
                                            .replace(/{u}/g, "u")
        
        resultadoDesencriptado.push(palabraDesencriptada);
        
    }
    
    
    console.log(cajaEntradaTexto.value);
    
    let textoDesencriptado = resultadoDesencriptado.join(" ");
    console.log(textoDesencriptado);
    parrafoSalidaTexto.innerHTML = textoDesencriptado;
    

    return parrafoSalidaTexto;
    
}

/*
function botonCopiar(){
    let copiarTexto = parrafoSalidaTexto.innerHTML;
    copiarTexto.document.execCommand("copy");
    console.log(copiarTexto);
}
    */

async function copiarTexto() {
    try {
      await navigator.clipboard.writeText(parrafoSalidaTexto.innerHTML);
      console.log("Texto copiado al portapapeles")
    } catch (error) {
      console.error(error.message);
    }
  }

//writeText(parrafoSalidaTexto.innerHTML)
/*
function copiarTexto() {
    navigator.clipboard.writeText(parrafoSalidaTexto.innerHTML).then(() => {
        console.log("Texto copiado al portapapeles");
    }).catch(error => {
        console.error("Error al copiar el texto: ", error);
    });
}
    */