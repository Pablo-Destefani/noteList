package ar.com.ensolvers.repositories;

import ar.com.ensolvers.models.NotaModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author pablo
 */
@Repository
public interface NotaRepository extends CrudRepository<NotaModel, Long>{
    
}
