let numAleatorio = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

function asignatTextoElemento(elemento, texto) {
    let elementoTexto = document.querySelector(elemento);
    elementoTexto.innerHTML =texto;
}


//funcion para generar numero aleatorio
function generarNumAleatorio() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //console.log(numeroGenerado);
    //console.log(listaNumeroSorteado);

    if (listaNumeroSorteado.length == numeroMaximo){
        asignatTextoElemento('p','ya se sortearon todos los numeros posibles');
    }else{
        if (listaNumeroSorteado.includes(numeroGenerado)) {
            return generarNumAleatorio();
        } else {
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}


function obtenerNumero() {
    let numeroUsuario= parseInt(document.getElementById("valorIntento").value);
    if (numAleatorio===numeroUsuario) {
        asignatTextoElemento('p', `¡FELICIDADES! adivinaste el numero secreto en ${intentos} ${(intentos===1)? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numAleatorio) {
            asignatTextoElemento('p', 'El número secreto es MENOR');
        }else{
            asignatTextoElemento('p', 'El número secreto es MAYOR');
        }
        intentos ++;
        limpiarCaja();
    }
    
    return;
}

function limpiarCaja() {
    return document.querySelector('#valorIntento').value = '';
}

function condicionesIniciales() {
    asignatTextoElemento('h1', 'Juego del número secreto');
    asignatTextoElemento('p', `ingrese un número del 1 al ${numeroMaximo}`); 

    numAleatorio = generarNumAleatorio();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //reiniciar el contador
    //reiniciar el numero aleatorio
    condicionesIniciales();
    //Desabilitar el boton
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
