package ar.com.ensolvers.services;

import ar.com.ensolvers.models.NotaModel;
import ar.com.ensolvers.repositories.NotaRepository;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author pablo
 */
@Service
public class NotaService {
    
    @Autowired
    NotaRepository notaRepository;
    
    public ArrayList<NotaModel> obtenerNotas(){
        return (ArrayList<NotaModel>) notaRepository.findAll();
    }
    
    public NotaModel guardarNota(NotaModel nota){
        return notaRepository.save(nota);
    }
    
    public boolean eliminarNota(Long id){
        try{
            notaRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }
}
