//Variables
let formularioNombre = document.getElementById('formularioNombre');
let cuerpoFomulario = document.getElementById('cuerpoFormulario')
let tablero = document.getElementById('tablero')
let container = document.getElementById('container')
let nombre = document.getElementById('nombre');
let nombreJugador = document.getElementById('nombreJugador')
let nombre2 = document.getElementById('nombre2');
let nombreJugador2 = document.getElementById('nombreJugador2')
let recarga = document.querySelectorAll('.recarga')
let listaCasilla = document.querySelectorAll('.casilla')
let ganador = document.getElementById('ganador')
let pestañaGanador = document.getElementById('pestañaGanador')

let turno = true
let partidaAcabada = false

const arrayVictoria = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [6, 3, 0], [7, 4, 1], [8, 5, 2], [0, 4, 8], [6, 4, 2]]



//Programa
formularioNombre.addEventListener('submit', (ev) => {
    ev.preventDefault();
    nombreJugador.innerHTML = nombre.value
    nombreJugador2.innerHTML = nombre2.value
    // nombre = nombre.value
    // nombre2 = nombre2.value
    nombre.value = ''
    nombre2.value = ''
    cuerpoFomulario.style.display = 'none'
    container.style.display = 'flex'
    

})
recarga.forEach(function(boton){
    boton.addEventListener('click',()=>{
        location.reload()
    })
})

listaCasilla.forEach(function (casilla) {

    
    casilla.addEventListener('click', function () {
        
        if (partidaAcabada === false) {
            if (turno && casilla.innerHTML.length === 0) {
                casilla.innerHTML = '🐱'
                turno = !turno
                for (let i = 0; i < arrayVictoria.length; i++) {
                    const element = arrayVictoria[i];
                    if (listaCasilla[element[0]].innerHTML === '🐱' && listaCasilla[element[1]].innerHTML === '🐱' && listaCasilla[element[2]].innerHTML === '🐱') {
                        partidaAcabada = true
                        ganador.innerHTML = 'Ha ganado: ' + nombreJugador.innerHTML
                        container.style.display = 'none'
                        pestañaGanador.style.display = 'flex'
                
                       
                       
                    }
                }

            }
            if (!turno && casilla.innerHTML.length === 0) {
                casilla.innerHTML = '🦊'
                turno = !turno
                for (let i = 0; i < arrayVictoria.length; i++) {
                    const element = arrayVictoria[i];
                    if (listaCasilla[element[0]].innerHTML === '🦊' && listaCasilla[element[1]].innerHTML === '🦊' && listaCasilla[element[2]].innerHTML === '🦊') {
                      partidaAcabada = true
                      ganador.innerHTML = 'Ha ganado: ' + nombreJugador2.innerHTML
                      container.style.display = 'none'
                        pestañaGanador.style.display = 'flex'
                   
                    }
                }

            }

        }
    })

})


