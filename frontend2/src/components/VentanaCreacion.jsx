import React, { Fragment, useRef,useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './ventanaCreacion.css';


export  function VentanaCreacion({activar, cerrar,guardarNota,editarNota, nota}) {
   //funcion para cargar los datos en caso de editar una nota
    let tituloN ="Ingrese el titulo de la nota";
    let descripcionN ="Ingrese descripcion de la nota";
    let titulo1="";
    let descripcion1="";
    let id1=-1;
    let archivada1;
    try{
        let  {id,titulo,descripcion,fecha,archivada} =nota;
        titulo1=titulo;
        descripcion1=descripcion;
        id1=id;
        archivada1=archivada;
    }catch (error) {

    }

   //funcion para llamar al metodo guardar
    const tituloRef = useRef();
    const descripcionRef = useRef();
    function guardar(){
        const titulo = tituloRef.current.value;
        const descripcion = descripcionRef.current.value;

        if (id1==-1){
            guardarNota(titulo, descripcion);
            cerrar();
        }else{
            editarNota(id1,titulo, descripcion,archivada1);
        }
    }

    //funcion para actualizar los campos de texto
    function manejarCambio(){

    }


    return (
    <Fragment>
        <Modal isOpen={activar}>
            <ModalHeader>Crear/Editar Nota</ModalHeader>
            <ModalBody>
                <div className="container">
                    <label className="label">Titulo</label>
                    <input className="input" ref={tituloRef} type="text" name="titulo" placeholder={tituloN}
                        defaultValue={titulo1} />
                </div>
                <br/>
                <div className="container">
                    <label className="label">Descipción</label>
                    <textarea className="input" ref={descripcionRef} maxLength="255" rows="6" name="descripcion" 
                    placeholder={descripcionN} defaultValue={descripcion1}/>
                </div>
            </ModalBody>
            <ModalFooter>
                <button type="button" class="btn btn-darK" onClick={cerrar}>Cancelar</button>
                <button type="button" class="btn btn-dark" onClick={guardar}>Guardar</button>
            </ModalFooter>
        </Modal>
    </Fragment>
  )
}
