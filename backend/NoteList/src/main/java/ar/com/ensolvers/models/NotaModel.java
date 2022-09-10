package ar.com.ensolvers.models;

import javax.persistence.*;

/**
 *
 * @author pablo
 */
@Entity
@Table (name = "nota")
public class NotaModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique=true, nullable=false)
    private Long id;
    
    
    private String titulo;
    private String descripcion;
    private String fecha;
    private Boolean archivada;

    public NotaModel() {
    }

    public NotaModel(Long id, String titulo, String descripcion, String fecha, Boolean archivada) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.archivada = archivada;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public Boolean getArchivada() {
        return archivada;
    }

    public void setArchivada(Boolean archivada) {
        this.archivada = archivada;
    }
    
    
    
}
