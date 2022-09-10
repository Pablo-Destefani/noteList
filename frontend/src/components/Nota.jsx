import React, {Fragment, useRef} from 'react'
import './nota.css'

export function Nota({nota,abrir,eliminar, archivar,archivo}) {
  const {id, titulo,descripcion,fecha,archivada}= nota;
 
  //funcion para alterar la accion posible (archivar o restaurar)
  function accion(){
    if (archivada){
      return "Restaurar";
    }return "Archivar";
  }

  function eliminarNota(){
    eliminar(id,true);
  }

  function archivarNota(){
    archivar(id);
  }

  function editarNota(){
    abrir(true,nota);
  }
 
 
 
  if (archivada == archivo){
    return (
      <Fragment>
        <li class="nota">
          <h3 class="nota-title">{titulo}</h3>
          <p class="nota-description">{descripcion}</p>
          <div class="footer-nota">
            <p class="nota-date">Ultima Actualizacion: {fecha}</p>
            <div class="botonera">
              <button class="btn btn-dark" onClick={archivarNota}>{accion()}</button>
              <button  class="btn btn-dark" onClick={editarNota}>Editar</button>
              <button class="btn btn-dark" onClick={eliminarNota}>Eliminar</button>
            </div>
          </div>
        </li>
      </Fragment>
    );
  }
  
  
}
