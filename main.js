
function ganador () {
    console.log("Te felicito! GANASTE, contactanos para retirar tu premio")
}

let numeroGanador = 10;

let mensaje ="Si adivinas el numero te ganas un premio. ¿Queres jugar?"
let jugar = confirm(mensaje)

if (jugar === true) {
    let numeroUsuario = parseInt(prompt("Ingresa el numero que elegiste")) 

    if (numeroUsuario < numeroGanador) {
        console.error("Incorrecto! El numero es mas alto")}
        else if (numeroUsuario > numeroGanador) {
            console.error ("Incorrecto! El numero es mas bajo")}
            else if (numeroUsuario = numeroGanador) {
                ganador() }      
              }
else if (jugar !== confirm )
console.warn ("Te esperamos cuando quieras participar!")