/* VARIABLES */
const mascota = document.querySelector("#mascota"),
 propietario = document.querySelector("#propietario"),
 telefono = document.querySelector("#telefono"),
 fecha = document.querySelector("#fecha"),
 hora = document.querySelector("#hora"),
 sintomas = document.querySelector("#sintomas");
 const formulario = document.querySelector("#nueva-cita");
 const listaCitas = document.querySelector("#citas");

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

    creandoCita(obj){
        this.citas = [...this.citas, obj];
        //console.log(this.citas);
    }

    eliminarCitaObj(id){
        this.citas = this.citas.filter(ar => ar.id !== id);
    }
}

class Ui{

    mostrarMensaje(mensaje, tipo){
        const divPadre = document.querySelector(".agregar-cita");
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center'); 
        if(tipo === 'error'){
            divMensaje.classList.add('alert', 'alert-danger');          
        }else{
            divMensaje.classList.add('alert', 'alert-success');
        }
            divMensaje.innerHTML = mensaje;
            divPadre.insertBefore(divMensaje, formulario);
            setTimeout(function(){
                divMensaje.remove();
            },2000);
    }

    mostrarCitas({citas}){

        this.limpiarLista();
        citas.forEach( cita =>{
            const {id, mascota, propietario, telefono, fecha, hora, sintomas} = cita;

            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;

            const mascotaP = document.createElement('h2');
            mascotaP.classList.add('card-title', 'font-weight-bolder');
            mascotaP.textContent = mascota;

            const propietarioP = document.createElement('p');
            propietarioP.innerHTML = `
            <span class="font-wight-bolder">Propietario: </span> ${propietario}`;

            const telefonoP = document.createElement('p');
            telefonoP.innerHTML = `
            <span class="font-wight-bolder">Telefono: </span> ${telefono}`;

            const fechaP = document.createElement('p');
            fechaP.innerHTML = `
            <span class="font-wight-bolder">Fecha: </span> ${fecha}`;

            const horaP = document.createElement('p');
            horaP.innerHTML = `
            <span class="font-wight-bolder">Hora: </span> ${hora}`;

            const sintomasP = document.createElement('p');
            sintomasP.innerHTML = `
            <span class="font-wight-bolder">Sintomas: </span> ${sintomas}`;

            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn', 'btn-warning', 'editar-cita');
            btnEditar.textContent = "Editar";
            btnEditar.onclick = () =>{
                editarCita(id);
            };
            
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'btn-danger', 'eliminar-cita');
            btnEliminar.textContent = "Eliminar";
            btnEliminar.onclick = () =>{
                eliminarCita(id);
            };


            divCita.appendChild(mascotaP);
            divCita.appendChild(propietarioP);
            divCita.appendChild(telefonoP);
            divCita.appendChild(fechaP);
            divCita.appendChild(horaP);
            divCita.appendChild(sintomasP);
            divCita.appendChild(btnEditar);
            divCita.appendChild(btnEliminar);


            listaCitas.appendChild(divCita);

        });
        

    }

    limpiarLista(){
        while(listaCitas.firstChild){
            listaCitas.removeChild(listaCitas.firstChild);
        }
    }

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
    const {mascota,propietario,telefono,fecha,hora,sintomas} = citasObj;
    if(mascota ==='' || propietario==='' || telefono ==='' || fecha === '' || hora === '' || sintomas === ''){
        UI.mostrarMensaje("Todos los campos son obligatorios", "error");
    }else{
        citasObj.id = Date.now();
        CITA.creandoCita({...citasObj});
        
        UI.mostrarMensaje("Registro exitoso", "succes");
        reniciarObjeto();
        formulario.reset();
        UI.mostrarCitas(CITA);
    //console.log(citasObj);
    }
    
    
}

function editarCita(id){
    console.log("editar");
}

function eliminarCita(id){
    CITA.eliminarCitaObj(id);
    UI.mostrarCitas(CITA);
}

function reniciarObjeto(){
    citasObj.mascota = "";
    citasObj.propietario = "";
    citasObj.telefono = "";
    citasObj.fecha = "";
    citasObj.hora = "";
    citasObj.sintomas = "";

    
}
