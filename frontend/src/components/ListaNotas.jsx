import React from 'react'
import {Nota} from './Nota'

import './listaNotas.css'

export function ListaNotas({notas,abrir,eliminar,archivar, archivo}) {
    return (
      <ul className="lista-notas">
         {notas.map((nota)=>(
         <Nota key={nota.id} nota={nota} abrir={abrir} eliminar={eliminar} archivar ={archivar} archivo={archivo}/>))}   
     </ul>
  )
}
