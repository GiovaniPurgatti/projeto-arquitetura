package org.example.controllers;

import org.example.models.Usuario;
import org.example.services.UsuarioService;
import org.example.constants.Constant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:5173", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})@RequestMapping(Constant.API_USUARIO)
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/postar")
    public ResponseEntity<Usuario> save(@RequestBody Usuario usuario) {
        Usuario savedUser = usuarioService.save(usuario);
        return ResponseEntity.ok(savedUser);
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Usuario>> findAll() {
        List<Usuario> usuario = usuarioService.findAll();
        return ResponseEntity.ok(usuario);
    }

    @GetMapping("/buscar/{id}")
    public ResponseEntity<Usuario> findById(@PathVariable String id) {
        Optional<Usuario> usuario = usuarioService.findById(id);
        return usuario.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/editar/{id}")
    public ResponseEntity<Usuario> update(@PathVariable String id, @RequestBody Usuario usuario) {
        Optional<Usuario> updated = usuarioService.update(id, usuario);
        return updated.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable String id) {
        usuarioService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
