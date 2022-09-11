import React, {Fragment, useState,useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';


import {Titulo} from './components/Titulo.jsx';
import {ListaNotas} from './components/ListaNotas.jsx';
import {CrearNota} from './components/CrearNota.jsx';
import {VentanaCreacion} from './components/VentanaCreacion.jsx';


import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

export function App() {

const urlLista = "http://localhost:8080/notas/lista";
const [notas,setNotas]= useState([]);
const listarApi = async () =>{
    const response = await fetch(urlLista);
    const responseJSON = await response.json();
    setNotas(responseJSON);
}
useEffect(()=>{
    listarApi();
},[])

const urlGuardar = "http://localhost:8080/notas/guardar";
async function guardarApi (nota){
    const notaJSON = JSON.stringify(nota)
    console.log(notaJSON);
    const response = await fetch(urlGuardar, 
        {method: 'POST', 
        body:notaJSON,
        headers: {'Content-Type': 'application/json'},    
    }).then(res=> res.json())
    .then(data=>console.log(data));
}

async function eliminarApi (id){
    const response = await fetch("http://localhost:8080/notas/eliminar/".concat(id), 
        {method: 'DELETE'})
        .then(res=> res.json())
        .then(data=>console.log(data));
}

function obtenerFecha(){
    let fecha=new Date();
    const fechaSTR = (fecha.getDay()+"/"+fecha.getMonth()+"/"+fecha.getFullYear()).toString();
    return fechaSTR;
}











    const [titulo,setTitulo] = useState("Mis Notas");
    const [tituloBtn,setTituloBtn] = useState("Arhivo");
    //parametros necesarios no borrar
    const [notaEditar,setNotaEditar]= useState();
    
    

    //abrir y cerrar modal de creacion/edicion
    const [activar, setActivar]=useState(false);    
    function ventanaState(tipoAccion,nota) {
        if (tipoAccion) {
            setNotaEditar(nota);
            setActivar(!activar);
        }else{
            setActivar(!activar);
        }
    };

    //funcion guardar datos
    function guardarNota(titulo, descripcion){
        if (titulo ==="") return;
        let fecha =obtenerFecha();
        guardarApi({titulo: titulo, descripcion: descripcion, fecha: fecha, archivada:false});
        setNotas((prevNotas)=>{
            return [...prevNotas,{id: uuidv4() , titulo: titulo, descripcion: descripcion, fecha: obtenerFecha(), archivada:false}];
        });
    }

    //funcion editar nota
    function editarNota(id, titulo,descripcion,archivada){
        if (titulo ==="") return;
        const indice = notas.findIndex(nota => nota.id === id);
        const listaNotas = notas;
        listaNotas[indice].titulo = titulo;
        listaNotas[indice].descripcion = descripcion;
        listaNotas[indice].fecha = obtenerFecha();
        listaNotas[indice].archivada = archivada;
        guardarApi({id:id,titulo: titulo, descripcion: descripcion, fecha: obtenerFecha(), archivada:archivada});
        setNotas(listaNotas);
        };

    

    //funcion eliminar
    function eliminar(id,b) {
        let listaNotas = notas.filter((notas)=>notas.id != id);
        if (b){
            eliminarApi (id);
        }
        setNotas(listaNotas);
    }

    //funcion listas archivado y no archivado
    const [habilitarBotonCrear, setHabilitarBotonCrear] =useState(false);
    const [archivo, setArchivar]=useState(false); 
    function filtarListas() {
        if (archivo){
            setTitulo("Mis Notas");
            setTituloBtn("Archivo");
            setHabilitarBotonCrear(false);
        }else{
            setTitulo("Notas Archivadas");
            setTituloBtn("Mis Notas");
            setHabilitarBotonCrear(true);
        }
        setArchivar(!archivo);
        setNotas(notas);

    }

    //funcion valor archivar
    function archivar(id) {
        let indice = notas.findIndex(nota => nota.id === id);
        let nota = notas[indice];
        (nota.archivada)= !(nota.archivada);
        editarNota(nota.id,nota.titulo,nota.descripcion,nota.archivada)
        eliminar(nota.id,false);
        setNotas((prevNotas)=>{
            return [...prevNotas,nota];
        });
    }
    

    return (
    <Fragment>
        <div className="header">
            <Titulo titulo={titulo}/>
            <div className="botonera-principal">
                <button class="btn btn-dark boton-principal" onClick={filtarListas}>{tituloBtn}</button>
                <CrearNota abrir={ventanaState} habilitarBotonCrear={habilitarBotonCrear}/>
            </div>
        </div>
        <div className="body">
            <ListaNotas notas={notas} abrir={ventanaState} eliminar={eliminar} archivar={archivar} archivo={archivo}/>
            <VentanaCreacion activar={activar} cerrar={ventanaState} guardarNota={guardarNota} editarNota={editarNota} nota={notaEditar}/>
        </div>
        <footer className="footer">

        </footer>

    </Fragment>)
}
