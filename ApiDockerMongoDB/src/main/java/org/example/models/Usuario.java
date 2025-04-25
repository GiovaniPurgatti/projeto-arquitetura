package org.example.models;


import lombok.Data;
import org.springframework.data.annotation.Id;

@Data


public class Usuario {
    @Id
    private String id;
    private String nome;
    private String telefone;
}
