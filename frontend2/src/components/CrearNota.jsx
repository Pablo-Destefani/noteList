import React, { useRef } from 'react'
import { Fragment } from 'react';




export function CrearNota({abrir, habilitarBotonCrear}) {
    
    function CrearNota(){
        abrir(false);
      }

    const button = useRef();
    function vistible(){
        return habilitarBotonCrear;
    }
  
    return (
    <Fragment>
        <button disabled={habilitarBotonCrear} hidden={habilitarBotonCrear} class="btn btn-dark boton-principal" onClick={CrearNota}>Crear Nota</button>  
    </Fragment>)
}
