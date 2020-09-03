/* VARIABLES */
const mascota = document.querySelector("#mascota"),
 propietario = document.querySelector("#propietario"),
 telefono = document.querySelector("#telefono"),
 fecha = document.querySelector("#fecha"),
 hora = document.querySelector("#hora"),
 sintomas = document.querySelector("#sintomas");
 const formulario = document.querySelector("#nueva-cita");

 const citasObj = {
    mascota : '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
 };



/* CLASES */
class Citas{
    constructor(){
        this.citas = [];
    }
}

class Ui{

}



/* INSTANCIAS */

const CITA = new Citas();
const UI = new Ui();



/* EVENT LISTENER */
eventListener();
function eventListener(){
    mascota.addEventListener('input', solicitarCita);
    propietario.addEventListener('input', solicitarCita);
    telefono.addEventListener('input', solicitarCita);
    fecha.addEventListener('input', solicitarCita);
    hora.addEventListener('input', solicitarCita);
    sintomas.addEventListener('input', solicitarCita);

    formulario.addEventListener('submit', crearCita);

}



/* FUNCIONES */

function solicitarCita(e){
    e.preventDefault();
    citasObj[e.target.name] = e.target.value;
    
}

function crearCita(e){
    e.preventDefault();
    console.log(citasObj);
}
