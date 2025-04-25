package org.example.services;

import org.example.models.Usuario;
import org.example.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario save(Usuario usuario) {

        return usuarioRepository.save(usuario);
    }

    public List<Usuario> findAll() {
        return usuarioRepository.findAll();
    }

    public Optional<Usuario> findById(String id) {
        return usuarioRepository.findById(id);
    }

    public void deleteById(String id) {
        usuarioRepository.deleteById(id);
    }

    public Optional<Usuario> update(String id, Usuario usuario) {
        return usuarioRepository.findById(id).map(existing -> {
            usuario.setId(id);
            return usuarioRepository.save(usuario);
        });
    }
}

