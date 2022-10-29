// Capturamos una clase (querySelector), en este caso es el "body"
const body = document.querySelector('body');

// Capturamos una ID (getElementById), en este caso es el "toggle"
const toggle = document.getElementById('toggle');

// Realizamos el evento click y ejecutamos la función
toggle.onclick = function(){
    // Creo activator llamado "active" se incrusta dentro del HTML
    toggle.classList.toggle('active');
    // También le agrego la clase "active" al body en HTML
    body.classList.toggle('active');
};