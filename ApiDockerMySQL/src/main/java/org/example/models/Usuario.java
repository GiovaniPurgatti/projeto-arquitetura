package org.example.models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String Nome;
    private String Telefone;


    public String getNome() { return Nome;}

    public void setNome(String nome) { Nome = nome;}

    public String getTelefone() {return Telefone;}

    public void setTelefone(String telefone) {Telefone = telefone;}
}
