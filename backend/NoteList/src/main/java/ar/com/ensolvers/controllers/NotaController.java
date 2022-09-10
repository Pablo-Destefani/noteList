/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package ar.com.ensolvers.controllers;

import ar.com.ensolvers.models.NotaModel;
import ar.com.ensolvers.services.NotaService;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author pablo
 */
@RestController
@RequestMapping("/notas")
public class NotaController {
    
    @Autowired
    NotaService notaService;
    
    @CrossOrigin()
    @GetMapping("/lista")
    public ArrayList<NotaModel> obtenerNotas(){
        return notaService.obtenerNotas();
    }
    
    @CrossOrigin()
    @PostMapping("/guardar")
    public NotaModel guardarNota(@RequestBody NotaModel nota){
        return this.notaService.guardarNota(nota);
    }
    
    @CrossOrigin()
    @DeleteMapping(path="/eliminar/{id}")
    public String eliminarPorId(@PathVariable ("id") Long id){
        boolean estado = this.notaService.eliminarNota(id);
        if(estado){
            return "Eliminacion concretada";
        }else{
            return "eliminacion no concretada";
        }
    }
}
